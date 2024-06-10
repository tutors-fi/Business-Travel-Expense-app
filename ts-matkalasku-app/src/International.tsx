// src/components/International.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Country {
  name: string;
}

const International: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [tripType, setTripType] = useState<string>('international');
  const [stops, setStops] = useState<string[]>([]);
  const [newStop, setNewStop] = useState<string>('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryNames = response.data.map((country: any) => country.name.common);
        setCountries(countryNames);
      });
  }, []);

  const handleAddStop = () => {
    if (newStop) {
      setStops([...stops, newStop]);
      setNewStop('');
    }
  };

  return (
    <div className="p-6 bg-gray-100 font-roboto">
      <form className="bg-gray-200 p-4 rounded">
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

        {tripType === 'international' && (
          <>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label>Starting Country</label>
                <select className="w-full p-2 border rounded">
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label>Starting Time</label>
                <input type="time" className="w-full p-2 border rounded" />
              </div>
              <div className="flex-1">
                <label>Starting Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label>Additional Stops</label>
                <select className="w-full p-2 border rounded" multiple>
                  {stops.map((stop, index) => (
                    <option key={index} value={stop}>{stop}</option>
                  ))}
                </select>
              </div>
              <div>
            <button
              type="button"
              onClick={() => alert('Edit stop functionality to be implemented')}
              className="w-full p-2 bg-yellow-500 text-white rounded"
            >
              Edit Stop
            </button>
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
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label>Destination</label>
                <select className="w-full p-2 border rounded">
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label>End Time</label>
                <input type="time" className="w-full p-2 border rounded" />
              </div>
              <div className="flex-1">
                <label>End Date</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
            </div>
          </>
        )}

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

        <button type="button" className="w-full p-2 bg-white text-black rounded">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default International;
