import React, { ChangeEvent } from "react";
import "../styles.css";

interface NumericTextBoxProps {
  label: string;
  className?: string;
  value: number;
  onChange: (value: number) => void;
  showButtons: boolean;
}

const NumericTextBoxCount: React.FC<NumericTextBoxProps> = ({
  label,
  className,
  value,
  onChange,
  showButtons = true,
}) => {
  // Increment value by 1
  const handleIncrement = () => {
    if (value >= 0) {
      // Optional: Ensure positive value
      onChange(value + 1);
    }
  };

  // Decrement value by 1, ensuring it stays positive
  const handleDecrement = () => {
    if (value > 0) {
      // Ensure no negative values
      onChange(value - 1);
    }
  };

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
      <div>
        {showButtons && (
          <button
            type="button"
            onClick={handleDecrement}
            className="decrement-button"
          >
            -
          </button>
        )}
        <input
          type="number"
          min="0"
          step="1"
          value={isNaN(value) ? 0 : value}
          onChange={handleChange}
        />
        {showButtons && (
          <button
            type="button"
            onClick={handleIncrement}
            className="increment-button"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default NumericTextBoxCount;
