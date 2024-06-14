import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const TripDetails: React.FC = () => {
  const [stops, setStops] = useState<string[]>([]);
  const [newStop, setNewStop] = useState<string>('');
  const [savedLocations, setSavedLocations] = useState<string[]>([]);
  const [startLocation, setStartLocation] = useState<string>('');
  const [destinationLocation, setDestinationLocation] = useState<string>('');

  const handleAddStop = () => {
    if (newStop) {
      setStops([...stops, newStop]);
      setNewStop('');
    }
  };

  const handleSaveLocation = (location: string) => {
    setSavedLocations([...savedLocations, location]);
  };

  const LocationSelector: React.FC<{ label: string, value: string, setValue: (val: string) => void }> = ({ label, value, setValue }) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setValue(query);

      if (query.length > 2) {
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
            params: {
              q: query,
              format: 'json',
              addressdetails: 1,
              limit: 5
            }
          });
          setSuggestions(response.data.map((place: any) => place.display_name));
        } catch (error) {
          console.error('Error fetching location suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    const handleSuggestionClick = (suggestion: string) => {
      setValue(suggestion);
      setSuggestions([]);
    };

    return (
      <div className="flex-1 mb-4 relative">
        <label>{label}</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Select location"
          value={value}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className="border rounded mt-2 bg-white absolute z-10 w-full">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          onClick={() => handleSaveLocation(value)}
          className="w-32 p-2 bg-blue-500 text-white rounded mt-2"
        >
          Save Location
        </button>
        <Select
          options={savedLocations.map(location => ({ label: location, value: location }))}
          onChange={(selectedOption) => setValue(selectedOption?.value || '')}
          placeholder="Select from saved locations"
          className="mt-2"
        />
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="p-6 bg-gray-100 font-roboto w-3/5">
        <form className="bg-gray-200 p-4 rounded flex flex-col items-center">
          <div className="w-4/5">
            <hr className="border-t-2 border-gray-300 my-4" />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label>Trip Description</label>
              <input
                type="text"
                placeholder="Trip to Finland"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          

          <div className="flex space-x-4 mb-4 w-4/5">
            <LocationSelector label="Starting Location" value={startLocation} setValue={setStartLocation} />
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

          <div className="w-4/5">
            <hr className="border-t-2 border-gray-300 my-4" />
          </div>

          <div className="flex items-center justify-center space-x-4 mb-4 w-4/5">
            <div className="border border-gray-300 p-2 rounded">Additional Stops</div>
            <button
              type="button"
              onClick={() => alert('Open Edit Stop Window')}
              className="text-blue-500 cursor-pointer"
            >
              Edit Stop
            </button>
            <button
              type="button"
              onClick={handleAddStop}
              className="w-32 p-2 bg-blue-500 text-white rounded"
            >
              Add Stops
            </button>
          </div>

          <hr className="my-4" />

          <div className="w-4/5">
            <hr className="border-t-2 border-gray-300 my-4" />
          </div>

          <div className="flex space-x-4 mb-4 w-4/5">
            <LocationSelector label="Destination Location" value={destinationLocation} setValue={setDestinationLocation} />
            <div className="flex-1">
              <label>End Time</label>
              <input type="time" className="w-full p-2 border rounded" />
            </div>
            <div className="flex-1">
              <label>End Date</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
          </div>

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

          <button type="button" className="w-32 p-2 bg-white text-black rounded mt-4">
            Calculate
          </button>
          <div className="w-4/5">
            <hr className="border-t-2 border-gray-300 my-4" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripDetails;
