import React from "react";

// Styles
import "./services.css";

// Images
import gatsbyImg from "./../../images/jamstack/gatsby.svg";
import graphqlImg from "./../../images/jamstack/graphql.svg";
import faunaImg from "./../../images/jamstack/fauna.png";
import contentfulImg from "./../../images/jamstack/contentful.svg";

import mongoImg from "./../../images/mern/mongo.png";
import expressImg from "./../../images/mern/expressjs.svg";
import reactImg from "./../../images/mern/react.svg";
import nodeImg from "./../../images/mern/node.svg";

// Card
import { ServicesCard } from "../../SubComponents/ServicesCard/ServicesCard";

const Services = () => {
  return (
    <section
      // data-aos="zoom-in"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services</h1>
      <div className="services-cards">
        <ServicesCard
          image={reactImg}
          title="Frontend Development"
          tags={["ReactJs", "NextJs", "GatsbyJs", "Tailwindcss", "Bootstrap"]}
        />
        <ServicesCard
          image={nodeImg}
          title="Backend Development"
          tags={[
            "NodeJs",
            "ExpressJs",
            "MongoDB",
            "REST",
            "FaunaDB",
            "GraphQl",
          ]}
        />
        <ServicesCard
          image={gatsbyImg}
          title="MERN Stack Development"
          tags={["NodeJs", "ExpressJs", "GatsbyJs", "Tailwindcss", "Bootstrap"]}
        />
        <ServicesCard
          image={expressImg}
          title="Excel to Web Conversion"
          tags={["ReactJs", "NextJs", "GatsbyJs", "Tailwindcss", "Bootstrap"]}
        />
      </div>
    </section>
  );
};

export default Services;
