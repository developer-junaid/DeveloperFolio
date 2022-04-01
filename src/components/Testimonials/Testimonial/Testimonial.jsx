import React from "react";

// Styles
import "../testimonials.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

const Testimonial = ({ testimonial }) => {
  return (
    <>
      <div className="details">
        <p className="text">{testimonial.text}</p>
        <div className="source">
          <p className="name">
            {testimonial.name}
            <span className="country">({testimonial.country})</span>
          </p>
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
        </div>
      </div>
    </>
  );
};

export default Testimonial;
