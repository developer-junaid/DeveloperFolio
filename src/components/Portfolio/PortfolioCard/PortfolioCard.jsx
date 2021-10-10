import React, { useState } from "react";

// Styles
import "./portfolio-card.css";

// Data
import { portfolioList } from "data/data";

// components
import PortfolioList from "../PortfolioList/PortfolioList";

export const PortfolioCard = ({ title, githubUrl, liveUrl, imageSrc }) => {
  const [selected, setSelected] = useState("featured");

  return (
    <div className="portfolio">
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
      <div className="container">
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

{
  /* <a rel="noopener noreferrer" target="_blank" href="#aa">
        <div className="project-images"></div>
      </a>
      <div className="project-links">
        <div className="text">
          <h3>Title</h3>
        </div>
        <div className="icons">
          <a rel="noopener noreferrer" target="_blank" href="#aa">
            <i className="fab fa-github" title="github repo" id="github"></i>
          </a>
          <a rel="noopener noreferrer" href="#aa" target="_blank">
            <i
              className="fas fa-external-link-alt"
              title="live preview"
              id="live"
            ></i>
          </a>
        </div>
      </div> */
}
