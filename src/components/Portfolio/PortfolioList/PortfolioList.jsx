import React from "react";

// Styles
import "./portfolio-list.css";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <div
      className={"portfolio-list " + (active && "active")}
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  );
};

export default PortfolioList;
