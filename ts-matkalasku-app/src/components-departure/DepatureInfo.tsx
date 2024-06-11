import TextBox from "./TextBox/TextBox.tsx";
import SelectBox from "./SelectBox/SelectBox.tsx";
import CustomDatePicker from "./DatePicker/DatePicker.tsx";
import SelectCountry from "./SelectCountry/SelectCountry.tsx";
import NumericTextBox from "./NumericTextBox/NumbericTextBox.tsx";
import Button from "./Button/Button.tsx";

export const Departure_Info = () => {
  return (
    <div>
      <div className="text-box-row">
        <TextBox label="Trip description: " type="text" className="text-box" />
        <SelectBox label="Trip type: " className="text-box-type" />
      </div>
      <div className="text-box-row">
        <SelectCountry
          label="Starting Place: "
          className="select-box-country"
        />
        <TextBox label="Departure Time: " type="time" className="text-box" />
        <CustomDatePicker
          label="Select Date: "
          className="date-picker-container"
        />
      </div>
      <hr className="divider" />
      <p>1 additional stop</p>
      <hr className="divider" />
      <div className="text-box-row">
        <SelectCountry
          label="Destination Place: "
          className="select-box-country"
        />
        <TextBox label="End Time: " type="time" className="text-box" />
        <CustomDatePicker
          label="End Date: "
          className="date-picker-container"
        />
      </div>
      <p>Travel method</p>
      <div className="text-box-row">
        <SelectBox label="Trip type: " className="text-box-type" />
        <NumericTextBox label="Person count:" className="text-box" />
        <NumericTextBox label="Kilometers:" className="text-box" />
      </div>
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
