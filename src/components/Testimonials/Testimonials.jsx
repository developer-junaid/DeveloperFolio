import React, { useState } from "react";

// Styles
import "./testimonials.css";

// Data
import { fiverrTestimonials } from "data/data";

// Icon
import testimonialSVG from "images/review.png";

// components
import { Heading } from "components/Heading/Heading";
import Testimonial from "./Testimonial/Testimonial";

const Portfolio = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(2);

  return (
    <section
      data-aos="fade-left"
      className="testimonial-section"
      name="testimonial"
      id="testimonials"
    >
      <Heading text="Client Testimonials" style={{ padding: "3rem" }} />
      <div className="testimonials">
        {fiverrTestimonials &&
          fiverrTestimonials.map((testimonial) => (
            <div
              className={`testimonial-card ${
                testimonial.id !== activeTestimonial ? "none" : ""
              }`}
            >
              <div className="svg-image-container">
                <img src={testimonialSVG} alt="testimonial" />
              </div>
              <div className="buttons-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  onClick={() => console.log("Clicked Previous")}
                  className="svg"
                >
                  <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  onClick={() => console.log("Clicked Next")}
                  className="svg"
                  style={{ marginLeft: "1rem" }}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </div>
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
