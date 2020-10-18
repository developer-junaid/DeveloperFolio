import React from "react";
import "./../index.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>What I Am Good At &nbsp;&nbsp;?</h1>

      <div className="techs">
        <li>
          <i className="fab html fa-html5"></i> <p>HTML5</p>
        </li>
        <li>
          <i className="fab css fa-css3"></i>
          <p>CSS3</p>
        </li>
        <li>
          <i className="fab bootstrap fa-bootstrap"></i>
          <p>Bootstrap</p>
        </li>
        <li>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
        </li>
        <li>
          <i className="fab react fa-react"></i>
          <p>React</p>
        </li>
        <li>
          <i className="fab python fa-python"></i>
          <p>Python</p>
        </li>
      </div>
    </div>
  );
};

export default Services;
