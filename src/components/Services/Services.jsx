import React from "react";

// Styles
import "./services.css";

// Card
import { ServicesCard } from "components/Services/ServicesCard/ServicesCard";
import { Heading } from "components/Heading/Heading";

const Services = ({ services }) => {
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      name="services"
      id="services"
    >
      <Heading text="Services" />
      <div className="services-cards">
        {services &&
          services?.map(({ title, icon, tags }, index) => (
            <ServicesCard
              key={index}
              image={icon.asset.url}
              title={title}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
