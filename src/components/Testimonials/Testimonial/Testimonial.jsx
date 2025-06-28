import React from "react";

// Styles
import "../testimonials.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

const Testimonial = ({ testimonial }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? "star filled" : "star empty"}
          size="sm"
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="details">
        {testimonial.avatar && (
          <div className="avatar">
            <img
              src={testimonial.avatar.asset?.url || testimonial.avatar.url}
              alt={testimonial.avatar.alt || testimonial.name}
            />
          </div>
        )}

        {testimonial.rating && (
          <div className="rating">
            {renderStars(testimonial.rating)}
            <span className="rating-text">({testimonial.rating}/5)</span>
          </div>
        )}

        <p className="text">{testimonial.text}</p>

        <div className="source">
          <div className="client-info">
            <p className="name">
              {testimonial.name}
              {testimonial.position && (
                <span className="position"> - {testimonial.position}</span>
              )}
            </p>
            {testimonial.company && (
              <p className="company">{testimonial.company}</p>
            )}
            {testimonial.country && (
              <span className="country">({testimonial.country})</span>
            )}
          </div>

          {testimonial.url && (
            <a
              href={testimonial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              title="verify"
            >
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="lg"
                className="icon"
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
