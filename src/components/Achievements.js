import React from "react";
import "./../index.css";
import { motion } from "framer-motion";
import ciscoImage from "./../images/certificates/PCAP (Certified Associate in Python Programming).png";
import reactBasicImage from "./../images/certificates/ReactBasic(HackerRank).png";
import HTML5Image from "./../images/certificates/html5.png";
import gitImage from "./../images/certificates/Git.png";
import pythonImage from "./../images/certificates/specialization.png";
import smitPythonImage from "./../images/certificates/SMITPython.png";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Achievements = () => {
  return (
    <section
      data-aos="fade-up"
      className="achievements-container"
      name="achievements"
      id="achievements"
    >
      <h1 className="heading">Achievements</h1>
      <div className="projects-container">
        {/* Certification 1 - React Basic */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={reactBasicImage}>
            <div className="project-images" id="reactBasic"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>React Basic (HackerRank)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/certificates/6b34ec5a135a"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 2 - HTML5 */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={HTML5Image}>
            <div className="project-images" id="html5"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Intro to HTML5 (Michigan University)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/certificate/G83XS5DQJCN8"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 3 - Cisco Python */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={ciscoImage}>
            <div className="project-images" id="ciscoPython"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Programming Associate in Python (Cisco)</h3>
            </div>
            <div className="icons">
              <a rel="noopener noreferrer" href={ciscoImage} target="_blank">
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 4 - Git */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={gitImage}>
            <div className="project-images" id="git"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Version Control using Git (Atlassian)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/certificate/37AM696AMTE5"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Certification 5 - Specialization Python */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={pythonImage}>
            <div className="project-images" id="specPython"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Python Specialization (Michigan University)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href="https://www.coursera.org/account/accomplishments/specialization/certificate/DGENHCAN2NWE"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Certification 6 - Specialization Python */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a rel="noopener noreferrer" target="_blank" href={smitPythonImage}>
            <div className="project-images" id="smitPython"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Online Python Programming (SMIT)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                href={smitPythonImage}
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="url"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
      </div>
    </section>
  );
};

export default Achievements;
