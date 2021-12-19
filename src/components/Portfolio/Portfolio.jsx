import React, { useEffect, useState } from "react";

// Styles
import "./portfolio.css";

// Data
import {
  portfolioList,
  featuredPortfolio,
  webAppPortfolio,
  websitePortfolio,
} from "data/data";

// components
import { Heading } from "components/Heading/Heading";
import PortfolioList from "./PortfolioList/PortfolioList";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  // console.log("FEATURED: ", featuredPortfolio);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "webApp":
        setData(webAppPortfolio);
        break;

      case "website":
        setData(websitePortfolio);
        break;

      default:
        break;
    }
  }, [selected]);

  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="portfolio"
      id="portfolio"
    >
      <Heading text="Portfolio" style={{ padding: "3rem" }} />
      <ul>
        {portfolioList &&
          portfolioList.map((list) => (
            <PortfolioList
              title={list.title}
              key={list.id}
              active={selected === list.id}
              setSelected={setSelected}
              id={list.id}
              repoUrl={list.repositoryUrl}
              liveUrl={list.liveUrl}
              tagline={list.tagline}
            />
          ))}
      </ul>
      <div className="row">
        {data &&
          data.map((item, index) => (
            <div className="column" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <div className="left">
                  <h3>{item.title}</h3>
                  {item.tagline && <p>{item.tagline}</p>}
                </div>
                <div className="right">
                  <a href={item.repositoryUrl}>
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.6em" }}
                      title="Github Repo"
                    />
                  </a>

                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkSquareAlt}
                      size="2x"
                      className="icon"
                      title="Live view"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
