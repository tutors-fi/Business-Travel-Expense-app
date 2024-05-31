import * as cdk from "aws-cdk-lib";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as targets from "aws-cdk-lib/aws-route53-targets";
import * as cloudfront_origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as iam from "aws-cdk-lib/aws-iam";

import { Construct } from "constructs";

import { BlockPublicAccess, BucketAccessControl } from "aws-cdk-lib/aws-s3";

import {
	CfnOutput,
	Duration,
	RemovalPolicy,
	Stack,
	StackProps,
} from "aws-cdk-lib";
import * as fs from "fs";
import * as path from "path";

interface IConfig {
	domainName: string;
	subDomain: string;
	appName: string;
	stackName: string;
}

const configFile = fs.readFileSync("appConfig.json", "utf8");
const config: IConfig = JSON.parse(configFile);

export class CdkAwsReactStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);
		const { domainName, subDomain, appName } = config;

		// 1. Define the domain name, sourcebucket  by changing 'xxxx'.
		const siteDomain =
			subDomain && subDomain.length > 0
				? `${subDomain}.${domainName}`
				: domainName;

		// const sourceBucketName = config.sourceBucketName;
		// const zipObjectKey = config.zipObjectKey;

		// 1.1 Create a Route 53 hosted zone (optional - you will need to update the NS records).
		/*
    const hostedZone = new route53.PublicHostedZone(this, 'MyHostedZone', {
        zoneName: domainName,
        });
          
    new CfnOutput(this, 'Site', { value: 'https://' + siteDomain });
    */

		// 1.2 Find the current hosted zone in Route 53
		const zone = route53.HostedZone.fromLookup(this, "Zone", {
			domainName: domainName,
		});
		console.log(zone);

		new CfnOutput(this, "Site", { value: "https://" + siteDomain });

		// 2. Create a TLS/SSL certificate for HTTPS
		// const certificate = new acm.Certificate(this, "SiteCertificate", {
		// 	domainName: domainName,
		// 	validation: acm.CertificateValidation.fromDns(zone),
		// });
		const certificate = new acm.DnsValidatedCertificate(
			this,
			"SiteCertificate",
			{
				domainName: siteDomain,
				//subjectAlternativeNames: ["*." + domainName],
				hostedZone: zone,
				region: "us-east-1", // cloudfront only checks this region for certificates
			}
		);

		certificate.applyRemovalPolicy(RemovalPolicy.DESTROY);

		new CfnOutput(this, "Certificate", { value: certificate.certificateArn });

		// 3. Create an S3 bucket to store content, and set the removal policy to either 'Retain' or 'Destroy'
		// const siteBucketName = siteDomain;

		// const existingSiteBucket = s3.Bucket.fromBucketName(
		// 	this,
		// 	"ExistingSiteBucket",
		// 	siteBucketName
		// );

		const siteBucket = new s3.Bucket(this, "SiteBucket", {
			bucketName: `${appName}.${siteDomain}`,
			removalPolicy: RemovalPolicy.DESTROY, // it shall be changed to .RETAIN once in production
			blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
			autoDeleteObjects: true,
			accessControl: BucketAccessControl.PRIVATE,
			encryption: s3.BucketEncryption.S3_MANAGED,
		});

		// create cloudfront user
		const cloudfrontOAI = new cloudfront.OriginAccessIdentity(
			this,
			"CloudFrontOriginAccessIdentity",
			{ comment: `Cloudfront OAI for ${domainName}` }
		);

		// const siteBucketPolicy = new s3.BucketPolicy(this, "bucketPolicy", {
		// 	bucket: siteBucket,
		// });

		// Grant access to cloudfront
		//siteBucket.grantRead(cloudfrontOAI);

		// const updatePolicyStatement = new iam.PolicyStatement({
		// 	effect: iam.Effect.ALLOW,
		// 	actions: ["s3:GetObject"],
		// 	resources: [siteBucket.arnForObjects("*")],
		// 	principals: [
		// 		new iam.CanonicalUserPrincipal(
		// 			cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
		// 		),
		// 	],
		// });

		// siteBucketPolicy.document.addStatements(updatePolicyStatement);
		// if (siteBucket.policy) {
		// 	siteBucket.policy.document.addStatements(updatePolicyStatement);
		// } else {
		// 	siteBucket.addToResourcePolicy(updatePolicyStatement);
		// }

		siteBucket.addToResourcePolicy(
			new iam.PolicyStatement({
				actions: ["s3:GetObject"],
				resources: [siteBucket.arnForObjects("*")],
				principals: [
					new iam.CanonicalUserPrincipal(
						cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
					),
				],
			})
		);

		new CfnOutput(this, "Bucket", { value: siteBucket.bucketName });

		// 4. Deploy CloudFront distribution
		const distribution = new cloudfront.Distribution(this, "SiteDistribution", {
			certificate: certificate,
			defaultRootObject: "index.html",
			domainNames: [siteDomain],
			minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
			errorResponses: [
				{
					httpStatus: 404,
					responseHttpStatus: 404,
					responsePagePath: "/index.html",
					ttl: Duration.minutes(30),
				},
			],
			defaultBehavior: {
				origin: new cloudfront_origins.S3Origin(siteBucket, {
					originAccessIdentity: cloudfrontOAI,
				}),
				compress: true,
				allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
				viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
			},
		});

		new CfnOutput(this, "DistributionId", {
			value: distribution.distributionId,
		});

		new route53.ARecord(this, "WWWSiteAliasRecord", {
			zone,
			recordName: siteDomain,
			target: route53.RecordTarget.fromAlias(
				new targets.CloudFrontTarget(distribution)
			),
		});

		new route53.ARecord(this, "SiteAliasRecord", {
			zone,
			recordName: domainName,
			target: route53.RecordTarget.fromAlias(
				new targets.CloudFrontTarget(distribution)
			),
		});

		new s3deploy.BucketDeployment(this, "DeployWebsite", {
			sources: [s3deploy.Source.asset("./react-app/dist")],
			// sources: [
			// 	s3deploy.Source.bucket(
			// 		s3.Bucket.fromBucketName(this, "SourceBucket", sourceBucketName),
			// 		zipObjectKey
			// 	),
			// ],
			prune: true,
			destinationBucket: siteBucket,
			distribution,
			distributionPaths: ["/*"],
		});
	}
}
