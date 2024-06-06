import TextBox from "./TextBox.tsx";
import SelectBox from "./SelectBox.tsx";

export const Departure_Info = () => {
  return (
    <div className="text-box-row">
      <TextBox label="First Text Box: " className="text-box" />
      <SelectBox label="Second Select Box: " className="text-box" />
    </div>
  );
};
