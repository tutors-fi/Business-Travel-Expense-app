// src/components/TripDetails.tsx
import React from 'react';

interface TripDetailsProps {
  tripType: string;
  setTripType: React.Dispatch<React.SetStateAction<string>>;
}

const TripDetails: React.FC<TripDetailsProps> = ({ tripType, setTripType }) => (
  <div className="flex space-x-4 mb-4">
    <div className="flex-1">
      <label>Trip Description</label>
      <input 
        type="text" 
        placeholder="Trip to Finland" 
        className="w-full p-2 border rounded"
      />
    </div>
    <div className="flex-1">
      <label>Trip Type</label>
      <select 
        value={tripType} 
        onChange={(e) => setTripType(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="international">International</option>
        <option value="domestic">Domestic</option>
      </select>
    </div>
  </div>
);

export default TripDetails;
