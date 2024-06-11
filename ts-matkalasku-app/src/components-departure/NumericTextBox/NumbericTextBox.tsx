import React, { ChangeEvent, useState } from "react";
import "../styles.css";

interface NumericTextBoxProps {
  label: string;
  className?: string;
}

const NumericTextBox: React.FC<NumericTextBoxProps> = ({
  label,
  className,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="number"
        min="0"
        step="1"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumericTextBox;
