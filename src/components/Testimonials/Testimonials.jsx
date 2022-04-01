import React, { useState } from "react";

// Styles
import "./testimonials.css";

// Data
import { fiverrTestimonials } from "data/data";

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
              <div className="buttons-container">
                <div className="Quotes">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    viewBox="0 0 64 64"
                    style={{ enableBackground: "new 0 0 64 64" }}
                    xml:space="preserve"
                  >
                    <path
                      class="st2"
                      d="m33.4 7.9-11 10.5v-4.3c0-2.2-1.8-4-4-4h0c-2.2 0-4 1.8-4 4v1.5c0 6.9-1.4 13.8-4.2 20.1L7.9 41l17.8 17.8 14.8-7.1 18.4-18.4L33.4 7.9z"
                    />
                    <path
                      d="M12 36.6c2.9-6.6 4.4-13.7 4.4-20.9v-1.5c0-1.1.9-2 2-2"
                      style={{
                        fill: "none",
                        stroke: "#fff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "10",
                      }}
                    />
                    <path d="M51.4 52.1h-25c-2.2 0-4-1.8-4-4V8.6c0-2.2 1.8-4 4-4h25c2.2 0 4 1.8 4 4v39.5c0 2.2-1.8 4-4 4z" />
                    <path
                      class="st1"
                      d="M21.3 62.6 3.6 45c-1-1-1-2.6 0-3.5L7.1 38c1-1 2.6-1 3.5 0l17.7 17.7c1 1 1 2.6 0 3.5l-3.5 3.5c-1 .9-2.5.9-3.5-.1zM51.4 48.1h-25c-2.2 0-4-1.8-4-4V4.6c0-2.2 1.8-4 4-4h25c2.2 0 4 1.8 4 4v39.5c0 2.2-1.8 4-4 4z"
                    />
                    <path d="M22.4 6.4h33v36h-33z" />
                    <path d="M24.4 14.4v-6h6" />
                    <path d="m39.8 17.1 1.6 3.5c.1.3.4.5.8.6l3.8.6c.8.1 1.1 1.1.6 1.7l-2.8 2.9c-.2.2-.3.5-.3.9l.6 4c.1.8-.7 1.4-1.5 1l-3.3-1.8c-.3-.2-.7-.2-1 0L35 32.3c-.7.4-1.6-.2-1.5-1l.6-4c.1-.3 0-.6-.3-.9L31 23.5c-.6-.6-.2-1.6.6-1.7l3.8-.6c.3-.1.6-.3.8-.6l1.6-3.5c.5-.8 1.6-.8 2 0z" />
                    <path d="M54.9 5.9V4.5l-3.8 1.3s-.1 0-.1.1h3.9z" />
                    <path d="M47.1 11.3c0 1.6.6 3 1.6 4-1 1.1-1.6 2.5-1.6 4 0 1.6.6 3 1.6 4-1 1.1-1.6 2.5-1.6 4 0 1.6.6 3 1.6 4-1 1.1-1.6 2.5-1.6 4 0 3.2 2.6 5.8 5.8 5.8.6 0 1.2-.1 1.8-.3h.1V6.9h-5.6c-1.3 1.1-2.1 2.7-2.1 4.4z" />
                    <path d="M34.9 45.4h6" />
                    <path
                      class="st2"
                      d="M58.5 13.5 54.1 15c-2.5.8-5-1-5-3.6v0c0-1.6 1-3.1 2.6-3.6l4.4-1.5c2.5-.8 5 1 5 3.6v0c0 1.6-1 3-2.6 3.6z"
                    />
                    <path
                      class="st2"
                      d="M58.5 21.5 54.1 23c-2.5.8-5-1-5-3.6v0c0-1.6 1-3.1 2.6-3.6l4.4-1.5c2.5-.8 5 1 5 3.6v0c0 1.6-1 3-2.6 3.6z"
                    />
                    <path
                      class="st2"
                      d="M58.5 29.5 54.1 31c-2.5.8-5-1-5-3.6v0c0-1.6 1-3.1 2.6-3.6l4.4-1.5c2.5-.8 5 1 5 3.6v0c0 1.6-1 3-2.6 3.6z"
                    />
                    <path
                      class="st2"
                      d="M58.5 37.5 54.1 39c-2.5.8-5-1-5-3.6v0c0-1.6 1-3.1 2.6-3.6l4.4-1.5c2.5-.8 5 1 5 3.6v0c0 1.6-1 3-2.6 3.6z"
                    />
                  </svg>
                </div>
                <div className="arrows">
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
              </div>
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
