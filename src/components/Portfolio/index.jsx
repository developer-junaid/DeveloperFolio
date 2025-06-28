import React, { useEffect, useState } from "react";

// Styles
import "./portfolio.css";

// components
import { Heading } from "components/Heading/Heading";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock";

import PortfolioItem from "./PortfolioItem/PortfolioItem";

// Utils
import {
  getUniqueCategories,
  filterProjectsByCategory,
  isPrivateUrl,
} from "../../utils/helpers";

const Portfolio = ({ projects = [], loading = false }) => {
  const [selected, setSelected] = useState("featured");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (projects.length > 0) {
      const uniqueCategories = getUniqueCategories(projects);
      setCategories(uniqueCategories);

      // Set default category to first available
      if (uniqueCategories.length > 0 && !uniqueCategories.includes(selected)) {
        setSelected(uniqueCategories[0]);
      }
    }
  }, [projects, selected]);

  useEffect(() => {
    if (selected && projects.length > 0) {
      const filtered = filterProjectsByCategory(projects, selected);
      setFilteredProjects(filtered);
    }
  }, [selected, projects]);

  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="portfolio"
      id="portfolio"
    >
      <Heading text="Portfolio" style={{ padding: "3rem" }} />

      {categories.length > 0 && (
        <div className="list">
          {categories.map((category) => (
            <PortfolioItem
              title={category}
              key={category}
              active={selected === category}
              setSelected={setSelected}
              id={category}
            />
          ))}
        </div>
      )}

      <div className="row">
        {filteredProjects.map((item, index) => (
          <div className="column" key={`${item.id}-${index}`}>
            <img
              src={item?.img?.asset?.url || item?.img?.url || ""}
              alt={item?.img?.alt || item.title || "Project"}
            />
            <div className="overlay">
              <div className="left">
                <h3>{item.title}</h3>
                {item.tagline && <p>{item.tagline}</p>}
                {item.description && (
                  <p className="project-description">{item.description}</p>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="technologies">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="tech-tag">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="right">
                {/* Repository Link */}
                {!isPrivateUrl(item.repositoryUrl) ? (
                  <a
                    href={item.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                      title="Github Repo"
                    />
                  </a>
                ) : (
                  <a href="#_" title="Private Repo">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.3em" }}
                    />
                  </a>
                )}

                {/* Live Link */}
                {!isPrivateUrl(item.liveUrl) ? (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live view"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkSquareAlt}
                      size="2x"
                      className="icon"
                    />
                  </a>
                ) : (
                  <a href="#_" title="Private Link">
                    <FontAwesomeIcon
                      icon={faUserLock}
                      size="2x"
                      className="icon"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
