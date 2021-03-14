import React from "react";
import "./../../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 7 - Diaries Manager App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://diaries-manager.web.app/"
          >
            <div className="project-images" id="diariesApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Diaries Manager App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Diaries-Manager-App"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://diaries-manager.web.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 2 - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://nike-shoe-store.netlify.app/"
          >
            <div className="project-images" id="shoeStore"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Nike Shoe Store</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Nike-Shoe-Store"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://nike-shoe-store.netlify.app/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project 1 - Todo List */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://todo-taskbox.web.app/"
          >
            <div className="project-images" id="todoList"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Todo List App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Todo-List"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://todo-taskbox.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project 1 - Uber Eats Landing */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://uber-eats-landing-page.netlify.app/"
          >
            <div className="project-images" id="uberEats"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Uber Eats (Landing Page)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Uber-Eats-Clone"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://uber-eats-landing-page.netlify.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project 1 - Corona Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://online-corona-tracker.web.app/"
          >
            <div className="project-images" id="coronaTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Corona Virus Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/Corona-Virus-Tracker"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://online-corona-tracker.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project 1 - Developerfolio */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developer-junaid.web.app/"
          >
            <div className="project-images" id="devFolio"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Developer Portfolio (DevFolio)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/DeveloperFolio"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://developer-junaid.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/developer-junaid/"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
