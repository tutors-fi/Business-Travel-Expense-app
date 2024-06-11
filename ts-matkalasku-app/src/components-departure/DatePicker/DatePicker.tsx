import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./CustomDatePicker.css";
import "../styles.css";

interface CustomDatePickerProps {
  label: string;
  className?: string;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  className,
  selectedDate,
  onDateChange,
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        className="date-picker-input"
        dateFormat="yyy/MM/dd"
      />
    </div>
  );
};

export default CustomDatePicker;
