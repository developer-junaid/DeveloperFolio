import React from "react";

// Animation
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

// Styles
import "./nav.css";

// Components
import MenuIcon from "components/Menu/MenuIcon/MenuIcon";

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
          &lt; Junaid /&gt;
        </span>

        <MenuIcon handleClick={handleClick} menuOpen={menuOpen} />
      </motion.div>
    </div>
  );
};

export default Nav;
