import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
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
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

    const handlePlaceChanged = () => {
      if (autocomplete !== null) {
        const place = autocomplete.getPlace();
        setValue(place.formatted_address || '');
      }
    };

    const onLoad = (autocompleteInstance: google.maps.places.Autocomplete) => {
      setAutocomplete(autocompleteInstance);
    };

    return (
      <div className="flex-1 mb-4">
        <label>{label}</label>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''} libraries={['places']}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={handlePlaceChanged}>
            <input 
              type="text" 
              className="w-full p-2 border rounded" 
              placeholder="Select location"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Autocomplete>
        </LoadScript>
        <button 
          type="button" 
          onClick={() => handleSaveLocation(value)} 
          className="w-full p-2 bg-blue-500 text-white rounded mt-2"
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
        </div>

        <div className="flex space-x-4 mb-4">
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

        <div className="flex space-x-4 mb-4">
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

        <button type="button" className="w-full p-2 bg-white text-black rounded">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default TripDetails;
