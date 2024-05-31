#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkAwsReactStack } from "../lib/cdk-aws_react-stack";
import * as fs from "fs";

const configFile = fs.readFileSync("appConfig.json", "utf8");
const config = JSON.parse(configFile);

const app = new cdk.App();
new CdkAwsReactStack(app, config.stackName, {
	/* If you don't specify 'env', this stack will be environment-agnostic.
	 * Account/Region-dependent features and context lookups will not work,
	 * but a single synthesized template can be deployed anywhere. */

	/* Uncomment the next line to specialize this stack for the AWS Account
	 * and Region that are implied by the current CLI configuration. */
	//env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: "eu-west-1" },

	/* Uncomment the next line if you know exactly what Account and Region you
	 * want to deploy the stack to. */
	env: { account: config.account, region: config.region },

	/* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
