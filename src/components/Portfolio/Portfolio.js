import React from "react";
import { PortfolioCard } from "./PortfolioCard/PortfolioCard";
import "./portfolio.css";
import { Heading } from "components/Heading/Heading";

const Portfolio = () => {
  return (
    <section
      data-aos="fade-left"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <Heading text="Portfolio" />
      <div className="projects-container">
        <PortfolioCard />
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/developer-junaid/"
        className="button-link"
      >
        <button className="button">See More</button>
      </a>
    </section>
  );
};

export default Portfolio;
