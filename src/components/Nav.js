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
      <nav>
        <ul className="nav-links">
          <li className="link">
            <a href="#s1">Home</a>
          </li>
          <li className="link">
            <a href="#s2">Services</a>
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
      </nav>
    </motion.div>
  );
};

export default Nav;
