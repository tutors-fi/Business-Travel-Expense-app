// src/components/TimeInput.tsx
import React from 'react';

interface TimeInputProps {
  label: string;
}

const TimeInput: React.FC<TimeInputProps> = ({ label }) => (
  <div className="flex-1">
    <label>{label}</label>
    <input type="time" className="w-full p-2 border rounded" />
  </div>
);

export default TimeInput;
