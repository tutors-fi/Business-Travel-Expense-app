import { useState } from "react";
import TextBox from "./TextBox/TextBox.tsx";
// import SelectBox from "./SelectBox/SelectBox.tsx";
import CustomDatePicker from "./DatePicker/DatePicker.tsx";
import SelectCountry from "./SelectCountry/SelectCountry.tsx";
import NumericTextBoxCount from "./NumericTextBoxCount/NumericTextBoxCount.tsx";
import Button from "./Button/Button.tsx";

export const Departure_Info = () => {
  //State hooks for form data
  const [tripDescription, setTripDescription] = useState("");
  // const [tripType, setTripType] = useState("");
  const [startingPlace, setStartingPlace] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [destinationPlace, setDestinationPlace] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [personCount, setPersonCount] = useState<number>(0);
  const [kilometers, setKilometers] = useState<number>(0);

  const handleCalculate = () => {
    console.log("Calculating with the following data:");
    console.log({
      tripDescription,
      // tripType,
      startingPlace,
      departureTime,
      departureDate,
      destinationPlace,
      endTime,
      endDate,
      personCount,
      kilometers,
    });
    alert("Calculation done!");
  };

  return (
    <div className="departure-info">
      {/* Row 1 */}
      <div className="text-box-row">
        <TextBox
          label="Trip description: "
          type="text"
          className="text-box"
          value={tripDescription}
          onChange={(e) => setTripDescription(e.target.value)}
        />
        {/* <SelectBox
            label="Trip type: "
            className="text-box-type"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          /> */}
      </div>

      {/* Row 2 */}
      <div className="text-box-row">
        <SelectCountry
          label="Starting Place: "
          className="select-box-country"
          value={startingPlace}
          onChange={(e) => setStartingPlace(e.target.value)}
        />
        <TextBox
          label="Departure Time: "
          type="time"
          className="text-box"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
        />
        <CustomDatePicker
          label="Select Date: "
          className="date-picker-container"
          selectedDate={departureDate}
          onDateChange={setDepartureDate}
        />
      </div>

      <hr className="divider" />
      <div className="text-box-row">
        <div>
          <p>1 additional stop</p>
          <p>Malaga 13/5/24</p>
        </div>
        <div>
          <p>Edit stops</p>
        </div>
        <div>
          <p>+ Add stop</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Row 3 */}
      <div className="text-box-row">
        <SelectCountry
          label="Destination Place: "
          className="select-box-country"
          value={destinationPlace}
          onChange={(e) => setDestinationPlace(e.target.value)}
        />
        <TextBox
          label="End Time: "
          type="time"
          className="text-box"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <CustomDatePicker
          label="End Date: "
          className="date-picker-container"
          selectedDate={endDate}
          onDateChange={setEndDate}
        />
      </div>
      {/* Row 4 */}
      <hr className="divider" />
      <p>Travel method</p>
      <div className="text-box-row">
        {/* <SelectBox
          label="Trip type: "
          className="text-box-type"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
        /> */}
        <NumericTextBoxCount
          label="Person count:"
          className="numeric-textbox-count"
          value={isNaN(personCount) ? 0 : personCount}
          onChange={(newValue) => setPersonCount(newValue)}
          showButtons={true}
        />
        <NumericTextBoxCount
          label="Kilometers:"
          className="numeric-textbox-count"
          value={isNaN(kilometers) ? 0 : kilometers}
          onChange={(newValue) => setKilometers(newValue)}
          showButtons={false}
        />
      </div>
      <hr className="divider" />
      <div>
        <Button
          label="Calculate"
          onClick={handleCalculate}
          className="button"
        ></Button>
      </div>
    </div>
  );
};
