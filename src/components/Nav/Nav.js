import React, { useState } from "react";
import "./../../index.css";
import { motion } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [navClicked, setNavClicked] = useState(false);
  let offset = -70;

  const handleClick = () => {
    setNavClicked(!navClicked);
  };

  const changeNav = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <div className={navbar ? "nav-wrapper active" : "nav-wrapper"}>
      <motion.div
        id="navbar"
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
        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={handleClick}>
          <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* // */}
        <ul className={navClicked ? "nav-links active" : "nav-links"}>
          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="home"
              spy={true}
              hashSpy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              Home
            </Link>
          </li>

          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="services"
              hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              Services
            </Link>
          </li>

          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              Skills
            </Link>
          </li>

          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="portfolio"
              delay={100}
              spy={true}
              smooth={true}
              offset={offset}
              hashSpy={true}
              duration={500}
            >
              Portfolio
            </Link>
          </li>

          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="contact"
              delay={100}
              hashSpy={true}
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Nav;
