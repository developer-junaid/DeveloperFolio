import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      className="nav-container"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <span className="logo">&lt; Dev-Junaid /&gt;</span>
        <ul className="nav-links">
          <li className="link">
            <a href="#home">Home</a>
          </li>
          <li className="link">
            <a href="#services">Services</a>
          </li>
          <li className="link">
            <a href="#">About</a>
          </li>
          <li className="link">
            <a href="#">Achievements</a>
          </li>
          <li className="link">
            <a href="#">Portfolio</a>
          </li>
          <li className="link">
            <a href="#">Contact</a>
          </li>
        </ul>
    </motion.div>
  );
};

export default Nav;
