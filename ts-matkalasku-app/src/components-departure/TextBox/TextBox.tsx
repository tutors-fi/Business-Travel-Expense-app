import React, { useState } from "react";
// import "./TextBox.css";
import "../styles.css";

interface TextBoxProps {
  label: string;
  className?: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  label,
  className,
  type = "text",
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} value={value} onChange={handleChange} />
    </div>
  );
};

export default TextBox;
