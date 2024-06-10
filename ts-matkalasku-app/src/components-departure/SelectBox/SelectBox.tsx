import React, { useState, ChangeEvent } from "react";
// import "./SelectBox.css";
import "../styles.css";

export const OPTIONS = ["Domestic", "International"];

interface SelectBoxProps {
  label: string;
  className?: string; // Optional className
}

// function SelectBox({ label, className }) {
//   const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

const SelectBox: React.FC<SelectBoxProps> = ({ label, className }) => {
  const [selectedOption, setSelectedOption] = useState<string>(OPTIONS[0]);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
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
};
export default SelectBox;
