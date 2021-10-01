import React from "react";

// Animation
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

export const PortfolioCard = ({ title, githubUrl, liveUrl, imageSrc }) => {
  return (
    <motion.div variants={boxVariants} whileHover="hover" className="projects">
      <a rel="noopener noreferrer" target="_blank" href="#aa">
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
      </div>
    </motion.div>
  );
};
