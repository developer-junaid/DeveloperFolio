import React, { useState } from "react";
import "./../index.css";
import { motion } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <motion.div
      className={navbar ? "nav-container active" : "nav-container"}
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
      <span className="logo" onClick={() => scroll.scrollToTop()}>
        &lt; Dev-Junaid /&gt;
      </span>
      <ul className="nav-links">
        <li className="link">
          <Link
            className={navbar ? "anchor is-active" : "anchor"}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Services
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Skills
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="portfolio"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Portfolio
          </Link>
        </li>

      
        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="achievements"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Achievements
          </Link>
        </li>

        <li className="link">
          <Link
            className="anchor"
            activeClass="active"
            to="contact"
            delay={100}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default Nav;
