import TextBox from "./TextBox";
import SelectBox from "./SelectBox";
import CustomDatePicker from "./DatePicker";
import SelectCountry from "./SelectCountry.tsx";

export const Departure_Info = () => {
  return (
    <div>
      <div className="text-box-row">
        <TextBox label="Trip description: " className="text-box" />
        <SelectBox label="Trip type: " className="text-box" />
      </div>
      <div className="text-box-row">
        <SelectCountry
          label="Starting Place: "
          className="select-box-country"
        />
        <TextBox label="Departure Time: " className="text-box" />
        <CustomDatePicker label="Select Date: " className="text-box" />
      </div>
      <hr className="divider" />
      <p>1 additional stop</p>
      <hr className="divider" />
      <div className="text-box-row">
        <SelectCountry
          label="Destination Place: "
          className="select-box-country"
        />
        <TextBox label="End Time: " className="text-box" />
        <CustomDatePicker label="End Date: " className="text-box" />
      </div>
      <p>Travel method</p>
      <div className="text-box-row">
        <SelectBox label="Trip type: " className="text-box" />
      </div>
    </div>
  );
};
