import React, { ChangeEvent } from "react";
import "../styles.css";

interface NumericTextBoxProps {
  label: string;
  className?: string;
  value: number;
  onChange: (value: number) => void;
}

const NumericTextBox: React.FC<NumericTextBoxProps> = ({
  label,
  className,
  value,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      event.target.value === "" ? NaN : Number(event.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      onChange(newValue);
    }
  };
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type="number"
        min="0"
        step="1"
        value={isNaN(value) ? "" : value}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumericTextBox;
