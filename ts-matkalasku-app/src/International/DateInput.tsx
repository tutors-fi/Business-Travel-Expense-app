// src/components/DateInput.tsx
import React from 'react';

interface DateInputProps {
  label: string;
}

const DateInput: React.FC<DateInputProps> = ({ label }) => (
  <div className="flex-1">
    <label>{label}</label>
    <input type="date" className="w-full p-2 border rounded" />
  </div>
);

export default DateInput;
