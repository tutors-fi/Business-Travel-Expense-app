import TextBox from "./TextBox";
import SelectBox from "./SelectBox";
import CustomDatePicker from "./DatePicker";

export const Departure_Info = () => {
  return (
    <div>
      <div className="text-box-row">
        <TextBox label="Trip description: " className="text-box" />
        <SelectBox label="Trip type: " className="text-box" />
      </div>
      <div className="text-box-row">
        <TextBox label="Starting Place: " className="text-box" />
        <TextBox label="Departure Time: " className="text-box" />
        <CustomDatePicker label="Select Date: " className="text-box" />
      </div>
    </div>
  );
};
