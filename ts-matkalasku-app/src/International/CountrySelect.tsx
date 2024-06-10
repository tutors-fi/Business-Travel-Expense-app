// src/components/CountrySelect.tsx
import React from 'react';

interface CountrySelectProps {
  label: string;
  countries: string[];
}

const CountrySelect: React.FC<CountrySelectProps> = ({ label, countries }) => (
  <div className="flex-1">
    <label>{label}</label>
    <select className="w-full p-2 border rounded">
      {countries.map((country) => (
        <option key={country} value={country}>{country}</option>
      ))}
    </select>
  </div>
);

export default CountrySelect;
