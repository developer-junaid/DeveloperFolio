import React, { useEffect, useState } from "react";

// Styles
import "./portfolio.css";

// Data
import {
  portfolioList,
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
} from "data/data";

// components
import { Heading } from "components/Heading/Heading";
import PortfolioList from "./PortfolioList/PortfolioList";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "mobile":
        setData(mobilePortfolio);
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
      <Heading text="Portfolio" />
      <ul>
        {portfolioList &&
          portfolioList.map((list) => (
            <PortfolioList
              title={list.title}
              key={list.id}
              active={selected === list.id}
              setSelected={setSelected}
              id={list.id}
            />
          ))}
      </ul>
      <div className="row">
        {data &&
          data.map((item) => (
            <div className="column">
              <img src={item.img} alt={item.title} />
              {/* <h3>{item.title}</h3> */}
              {/* <div className="overlay">
                <h4>VIP Auto Tires and Service</h4>
                <p>eCommerce / Magento</p>
              </div> */}
            </div>
          ))}
      </div>
      {/* <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/developer-junaid/"
        className="button-link"
      >
        <button className="button">See More</button>
      </a> */}
    </section>
  );
};

export default Portfolio;
