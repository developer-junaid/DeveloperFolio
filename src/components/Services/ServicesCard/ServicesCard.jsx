import React from "react";
import "./services-card.css";

export const ServicesCard = ({ image, tags, title }) => {
  return (
    <div className="services-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
