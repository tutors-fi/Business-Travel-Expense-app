import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./CustomDatePicker.css";
import "../styles.css";

interface CustomDatePickerProps {
  label: string;
  className?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  className,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="date-picker-input"
      />
    </div>
  );
};

export default CustomDatePicker;
