import React from "react";

// Styles
import "./testimonials.css";

// Data
import { fiverrTestimonials } from "data/data";

// components
import { Heading } from "components/Heading/Heading";
import Testimonial from "./Testimonial/Testimonial";

const Portfolio = () => {
  return (
    <section
      data-aos="fade-left"
      className="testimonials"
      name="testimonials"
      id="testimonials"
    >
      <Heading text="Client Testimonials" style={{ padding: "3rem" }} />
      <ul>
        {fiverrTestimonials &&
          fiverrTestimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
      </ul>
    </section>
  );
};

export default Portfolio;
