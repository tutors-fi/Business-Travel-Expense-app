import React, { useState } from "react";
import "./TextBox.css";

function TextBox({ label, className }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={className}>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default TextBox;
