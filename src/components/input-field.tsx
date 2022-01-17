import React, { Dispatch } from "react";

interface props {
  name: string;
  icon?: string;
  state: Dispatch<string>;
  num: string;
}

export const numberKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "Backspace",
];

const InputField: React.FC<props> = ({ name, icon, state, num }) => {
  return (
    <div className="input-field">
      <label htmlFor={name} className="section-heading">
        {name}
      </label>
      <input
        type="text"
        name={name}
        value={num}
        onKeyDown={(e) => {
          if ([...numberKeys, "."].includes(e.key)) {
            e.key === "Backspace"
              ? state(num.substr(0, num.length - 1))
              : state(num.concat(e.key));
          }
        }}
      />
      <img src={icon} alt={`Icon for ${name}`} />
    </div>
  );
};

export default InputField;
