import React, { useState } from "react";

// Styles
import "./testimonials.css";

// Icon
import testimonialSVG from "images/review.png";

// Components
import { Heading } from "components/Heading/Heading";
import Testimonial from "./Testimonial/Testimonial";

const Testimonials = ({ testimonials = [], loading = false }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const nextSlide = (index) => {
    if (index === testimonials?.length) {
      setActiveTestimonial(1);
    } else {
      setActiveTestimonial(index + 1);
    }
  };

  const prevSlide = (index) => {
    if (index - 1 === 0) {
      setActiveTestimonial(testimonials.length);
    } else {
      setActiveTestimonial(index - 1);
    }
  };

  return (
    <section
      data-aos="fade-left"
      className="testimonial-section"
      name="testimonial"
      id="testimonials"
    >
      <Heading
        text={`Client Testimonials (${testimonials?.length || 0})`}
        style={{ padding: "3rem" }}
      />
      <div className="testimonials">
        {testimonials &&
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                Number(testimonial.id) !== activeTestimonial ? "none" : "block"
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
                  onClick={() => prevSlide(Number(testimonial.id))}
                  className="svg"
                >
                  <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  onClick={() => nextSlide(Number(testimonial.id))}
                  className="svg"
                  style={{ marginLeft: "1rem" }}
                >
                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                </svg>
              </div>
              <Testimonial
                key={testimonial.id}
                testimonial={{
                  ...testimonial,
                  // Ensure backward compatibility
                  name: testimonial.name,
                  text: testimonial.text,
                  country: testimonial.country,
                  url: testimonial.url,
                  // New fields
                  position: testimonial.position,
                  company: testimonial.company,
                  rating: testimonial.rating,
                  avatar: testimonial.avatar,
                }}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
