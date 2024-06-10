

const EditStops = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center relative mt-7 mb-7">
       <div className="mb-6">
                <div className="flex items-center justify-center w-16 md:w-28 lg:w-36 border bg-gray-300 p-1 rounded-xl text-base md:text-2xl font-light top-0 right-0 absolute">
                    Go Back
                </div>
            </div>
          
        <div className=" flex flex-col space-y-4 p-9 h-screen bg-gray-100 relative w-3/5 md:w-2/3">
           
 <div className="relative">
            <div className="flex justify-between">
                <div className="flex flex-col ml-0 md:ml-8">
                <span className="text-lg md:text-2xl">Stop 1</span>
            <span className="text-lg text-zinc-700">Description for stop</span>
            </div>
            <div>
                 <span className="text-base md:text-lg text-blue-600">Edit</span>
            <span className="ml-1 md:ml-6 text-base md:text-lg text-zinc-700">Remove</span>
            </div>
            </div>
             <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-300"></span>
 </div>
 
 
 <div className="relative">
           <div className="flex justify-between">
                <div className="flex flex-col ml-0 md:ml-8">
                <span className="text-lg md:text-2xl">Stop 2</span>
            <span className="text-lg text-zinc-700">Description for stop</span>
            </div>
            <div>
                 <span className="text-base md:text-lg text-blue-600">Edit</span>
            <span className="ml-1 md:ml-6 text-base md:text-lg text-zinc-700">Remove</span>
            </div>
            </div>
             <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-300"></span>
 </div>
 
 
 <div className="relative">
            <div className="flex justify-between">
                <div className="flex flex-col ml-0 md:ml-8">
                <span className="text-lg md:text-2xl">Stop 3</span>
            <span className="text-lg text-zinc-700">Description for stop</span>
            </div>
            <div>
                 <span className="text-base md:text-lg text-blue-600">Edit</span>
            <span className="ml-1 md:ml-6 text-base md:text-lg text-zinc-700">Remove</span>
            </div>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-zinc-300"></span>
        </div>
 <div className="flex justify-center">
        <div className=" flex items-center justify-center w-36 border border-zinc-400 bg-white p-1 rounded-xl text-base md:text-2xl font-light mb-10 bottom-0 absolute">
            Done</div>
 </div>
        </div>
        </div>
        </>
    )
 }
 
 
 export default EditStops
 

