// src/components/International.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TripDetails from './TripDetails';
import CountrySelect from './CountrySelect';
import TimeInput from './TimeInput';
import DateInput from './DateInput';
import Stops from './Stops';
import VehicleDetails from './VehicleDetails';

const International: React.FC = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [tripType, setTripType] = useState<string>('international');
  const [stops, setStops] = useState<string[]>([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryNames = response.data.map((country: any) => country.name.common);
        setCountries(countryNames);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 font-roboto">
      <form className="bg-gray-200 p-4 rounded">
        <TripDetails tripType={tripType} setTripType={setTripType} />

        {tripType === 'international' && (
          <>
            <div className="flex space-x-4 mb-4">
              <CountrySelect label="Starting Country" countries={countries} />
              <TimeInput label="Starting Time" />
              <DateInput label="Starting Date" />
            </div>
            <Stops stops={stops} setStops={setStops} />
            <div className="flex space-x-4 mb-4">
              <CountrySelect label="Destination" countries={countries} />
              <TimeInput label="End Time" />
              <DateInput label="End Date" />
            </div>
          </>
        )}

        <VehicleDetails />

        <button type="button" className="w-full p-2 bg-white text-black rounded">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default International;
