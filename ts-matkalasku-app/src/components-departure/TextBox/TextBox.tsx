import React, { ChangeEvent } from "react";
// import "./TextBox.css";
import "../styles.css";

interface TextBoxProps {
  label: string;
  className?: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  label,
  className,
  type,
  value,
  onChange,
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default TextBox;
