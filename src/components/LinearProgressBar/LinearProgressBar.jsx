import React from "react";
import classes from "./linearProgressBar.module.css";

const LinearProgressBar = ({ value, style, label }) => {
  return (
    <div className={classes.container} style={style}>
      <div className={classes.skillbar}>
        <h5 className={classes.skillbarTitle}>{label}</h5>
        <h5 className={classes.skillbarPercent}>{value}%</h5>
        <div className={classes.skillbarBar}>
          <div
            className={classes.skillbarChild}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LinearProgressBar;
