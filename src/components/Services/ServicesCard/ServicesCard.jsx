import React from "react";
import "./services-card.css";

export const ServicesCard = ({
  image,
  tags,
  title,
  description,
  features,
  alt,
}) => {
  return (
    <div className="services-card">
      <img src={image} alt={alt || title} />
      <h2>{title}</h2>
      {description && <p className="service-description">{description}</p>}
      {features && features.length > 0 && (
        <div className="features">
          <h4>Features:</h4>
          <ul>
            {features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
            {features.length > 3 && (
              <li>+{features.length - 3} more features</li>
            )}
          </ul>
        </div>
      )}
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
