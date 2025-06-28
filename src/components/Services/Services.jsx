import React from "react";

// Styles
import "./services.css";

// Components
import { ServicesCard } from "components/Services/ServicesCard/ServicesCard";
import { Heading } from "components/Heading/Heading";

const Services = ({ services = [], loading = false }) => {
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
          services?.map(
            ({ title, description, tags, features, icon }, index) => (
              <ServicesCard
                key={`${title}-${index}`}
                image={icon?.asset?.url || icon?.url || ""}
                title={title}
                description={description}
                tags={tags}
                features={features}
                alt={icon?.alt || title}
              />
            )
          )}
      </div>
    </section>
  );
};

export default Services;
