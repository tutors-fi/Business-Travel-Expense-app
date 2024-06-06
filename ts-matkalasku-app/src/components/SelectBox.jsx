import React from "react";

function SelectBox({ label, options, className, onChange, value }) {
  return (
    <div className={className}>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
