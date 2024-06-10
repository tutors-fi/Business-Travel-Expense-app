/* Test commit to make a new branch for the view and edit page for the application */

const ViewAndEdit = () => {

  return (
    <div className="flex flex-col justify-center items-center relative mt-7 mb-7">
       <div className="mb-6">
                <div className="flex items-center justify-center w-16 mt-20 mr-40 md:w-28 lg:w-36 border bg-gray-400 p-1 rounded-xl text-base md:text-2xl font-light top-0 right-0 absolute">
                  <button className="font-sans: open-sans">Go Back</button>  
                </div>
              </div>
    <div className="flex items-center w-4/5 gap-12 mt-[10rem] ml-[400px]">
      <h1 className="text-3xl font-sans:open-sans">View and edit entry</h1>
    </div>

  <div className="p-6 bg-gray-100 font-open-sans w-3/5 h-full">
        <p className="text-sm">Description</p>
        <hr className="border-1 border-black"></hr>
        <form>
          <input 
          type="text"
          placeholder="Trip to Finland"
          className="w-3/5 p-2 border rounded mt-2"
          >  
          </input>
          <p className="text-sm">Trip Information</p>
          <hr className="border-1 border-black"></hr>
          <div className="inline-flex items-center justify-between">
            <label htmlFor="startcountry"
            className=""
            >Starting Country</label>
            <select id="startcountry" name="startcountry" className="flex">
              <option value="finland">Finland</option>
              <option value="spain">Spain</option>
              <option value="india">India</option>
              <option value="bangladesh">Bangladesh</option>
            </select>  
            <div className="inline-flex items-center ml-6 ">
              <p>Destination</p>
              <div className="inline-flex items-center ml-6 ">
                <p>Date and time of trip start</p>
                <div className="inline-flex items-center ml-6 ">
                  <p>Date and time of trip end</p>
                  <div className="inline-flex items-center ml-6 ">
                    <p>Trip duration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>      
  </div>
</div>

  )

}


export default ViewAndEdit


