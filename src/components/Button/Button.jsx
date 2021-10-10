import React from "react";

// Styles
import "./button.css";

const Button = ({ type, style, text, onClick }) => {
  return (
    <button type={type} className="button" style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
