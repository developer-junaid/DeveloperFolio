import React from "react";

// Styles
import "./button.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

const Button = ({ type, style, text, onClick, loading }) => {
  return (
    <button type={type} className="button" style={style} onClick={onClick}>
      {loading && (
        <FontAwesomeIcon icon={faSpinner} size="sm" spin className="icon" />
      )}
      <span className={loading ? "none" : ""}>{text}</span>
    </button>
  );
};

export default Button;
