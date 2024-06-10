// src/components/VehicleDetails.tsx
import React from 'react';

const VehicleDetails: React.FC = () => (
  <div className="flex space-x-4 mb-4">
    <div className="flex-1">
      <label>Choose Vehicle</label>
      <select className="w-full p-2 border rounded">
        <option value="car">Car</option>
        <option value="motorcycle">Motorcycle</option>
      </select>
    </div>
    <div className="flex-1">
      <label>Person Count</label>
      <input type="number" className="w-full p-2 border rounded" />
    </div>
    <div className="flex-1">
      <label>Kilometres</label>
      <input type="number" className="w-full p-2 border rounded" />
    </div>
  </div>
);

export default VehicleDetails;
