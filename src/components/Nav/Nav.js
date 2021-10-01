import React from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import "./nav.css";

const Nav = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={"nav-wrapper " + (menuOpen && "menuActive")}>
      <motion.div
        id="navbar"
        className={"nav-container"}
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
        <span
          className={"logo " + (menuOpen && "menuActive")}
          onClick={() => scroll.scrollToTop()}
        >
          &lt; Dev-Junaid /&gt;
        </span>

        {/* Mobile Menu */}
        <div
          className={"menu-icon " + (menuOpen && "menuActive")}
          onClick={handleClick}
        >
          {/* <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i> */}
          <span className={"line1 " + (menuOpen && "menuActive")}></span>
          <span className={"line2 " + (menuOpen && "menuActive")}></span>
          <span className={"line3 " + (menuOpen && "menuActive")}></span>
        </div>

        {/* <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li className="link">
            <Link
              className={"anchor"}
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
              className={"anchor"}
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
          </li> */}
        {/* <li className="link">
            <Link
              className={navbarActive ? "anchor scrolled" : "anchor"}
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
              className={navbarActive ? "anchor scrolled" : "anchor"}
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
          </li> */}
        {/* </ul> */}
      </motion.div>
    </div>
  );
};

export default Nav;
