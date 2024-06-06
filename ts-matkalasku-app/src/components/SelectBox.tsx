import React, { useState } from "react";
import "./SelectBox.css";

export const OPTIONS = ["Domestic", "Option 2", "Option 3"];

function SelectBox({ label, className }) {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <select value={selectedOption} onChange={handleSelectChange}>
        {OPTIONS.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default SelectBox;
