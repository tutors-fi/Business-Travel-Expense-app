// src/components/Stops.tsx
import React, { useState } from 'react';

interface StopsProps {
  stops: string[];
  setStops: React.Dispatch<React.SetStateAction<string[]>>;
}

const Stops: React.FC<StopsProps> = ({ stops, setStops }) => {
  const [newStop, setNewStop] = useState<string>('');

  const handleAddStop = () => {
    if (newStop) {
      setStops([...stops, newStop]);
      setNewStop('');
    }
  };

  return (
    <>
      <div className="flex space-x-4 mb-4">
        <div className="flex-1">
          <label>Additional Stops</label>
          <select className="w-full p-2 border rounded" multiple>
            {stops.map((stop, index) => (
              <option key={index} value={stop}>{stop}</option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label>Edit Stop</label>
          <input 
            type="text" 
            value={newStop} 
            onChange={(e) => setNewStop(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex-1">
          <button 
            type="button" 
            onClick={handleAddStop} 
            className="w-full p-2 bg-blue-500 text-white rounded flex items-center justify-center"
          >
            <span className="mr-2">+</span> Add Stop
          </button>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Stops;
