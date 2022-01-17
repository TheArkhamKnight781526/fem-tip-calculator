import React, { Dispatch } from "react";

export interface props {
  text: string;
  value: any;
  theme?: "dark" | "light";
  state: Dispatch<any>;
  active?: boolean;
}

const Button: React.FC<props> = ({
  text,
  value,
  theme = "light",
  state,
  active,
}) => {
  return (
    <button
      className={`button ${theme}${active ? " active" : ""}`}
      onClick={() => state(value)}
    >
      {text}
    </button>
  );
};

export default Button;
