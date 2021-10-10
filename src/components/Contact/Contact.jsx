import React, { useState } from "react";

// Styles
import "./contact.css";

// image
import shakeImage from "../../images/shake.svg";

// Comp
import { Heading } from "../Heading/Heading";

const Contact = () => {
  const [notification, setNotification] = useState(false);
  const [values, setValues] = useState({ email: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("form submitted !", values);
    // TODO : Send data to your email

    setNotification(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contact" name="contact" id="contact">
      <Heading text="Contact" style={{ marginBottom: "3rem" }} />
      <div className="content">
        <div className="left">
          <img src={shakeImage} alt="" />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              required
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            <button type="submit" className="button">
              Send
            </button>
            {notification && (
              <span style={{ color: "green", marginTop: "1rem" }}>
                Thanks, I will reply ASAP :)
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
