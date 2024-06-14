import React from 'react';

/*Adjust the values using tailwind directly in the code without separate css file.*/ 

const AdditionalStop = () => {
    return (
        <div className="mt-40 px-8 bg-gray-200 p-6 rounded-lg shadow-md mx-auto max-w-screen-md font-sans">
        <div className="flex flex-col items-centre">
          <div className="mb-4 pb-10">
            <span className="text-lg font-bold font-roboto">Add additional stop</span>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
          <div className="-ml-30"> {/* Adjust margin to move left */}
              <label htmlFor="input1" className="block mb-1">Location:</label>
              <input 
                type="text" 
                id="input1" 
                className="border border-gray-300 rounded-xl px-3 py-2 " /*adjust the border color, border roundess and paddings*/
                placeholder="Location" /*Remove placeholders if you dont want text inside the inputs */
              />
            </div>
            <div className="pl-40"> {/* Use custom margin */}
              <label htmlFor="input2" className="block mb-1">Description:</label>
            <input 
              type="text" 
              id="input2"
              className="border border-gray-300 rounded-xl px-3 py-2"
              placeholder="Write description"
            />
            </div>
          </div>
          <div className="flex justify-center space-x-4">
          <div className="mt-4 -ml-20"> {/* Adjust margin to move left */}
          <label htmlFor="input3" className="block mb-1">Choose vehicle:</label>
          <select id="input3" className="border border-gray-300 rounded-xl px-3 py-2">
              <option value="">Select vehicle</option> {/*Creating dropdown menu here */}
              <option value="car">Car</option> {/*Dropdown option for the dropdown menu. Copy and paste another line if you need more options */}
            </select>
            </div>
            <div className="mt-4 pl-10"> {/* Add margin-top */}
              <label htmlFor="input4" className="block mb-1">Person count:</label>
            <input 
              type="text" 
              id="input4"
              className="border border-gray-300 rounded-xl px-8 w-32 py-2"
              placeholder="Person(s)"
            />
            </div>
            <div className="mt-4 pl-10"> {/* Add margin-top */}
              <label htmlFor="input5" className="block mb-1">Kilometers:</label>
            <input 
              type="text" 
              id="input5"
              className="border border-gray-300 rounded-xl px-8 w-32 py-2"
            />
            </div>
          </div>
          <hr className="w-full border-t border-gray-300 my-4" />
          <div className="flex justify-center mb-40"> 
          <button className="bg-white text-black px-4 py-2 rounded-xl hover:bg-green-600"> + Add stop</button>
        </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white px-8 py-2 rounded-xl mr-4 hover:bg-blue-600">Done</button>
            <button className="bg-red-500 text-white px-8 py-2 rounded-xl hover:bg-red-600">Cancel</button>
          </div>
        </div>
      </div>
    ); 
};

export default AdditionalStop;