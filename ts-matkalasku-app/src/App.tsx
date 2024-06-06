import React, { useState } from "react";
import TextBox from "./components/TextBox.jsx";
import SelectBox from "./components/SelectBox.jsx";
import "./App.css";

export const OPTIONS = ["Option 1", "Option 2", "Option 3"];

function App() {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      {/* <div>
        <h1>Add travel information</h1>
        <p>This is the home page of my website.</p>
      </div> */}
      <div>
        <h1 className="top-left-corner">Add travel information</h1>
        <p>Trip description</p>
        <div className="text-box-row">
          <TextBox label="Description" className="text-box" />
          <SelectBox
            label="Type: "
            options={OPTIONS}
            className="text-box"
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </div>
      </div>
      {/* <h1 className="text-3xxxxl bolder">Vite + React</h1>
      <div className="card text-3xl font-bold underline">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
