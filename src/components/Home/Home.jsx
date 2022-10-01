import React from "react";
import Typewriter from "typewriter-effect";

// SVG
import man from "images/dev.svg";

// Animation
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// CSS
import "./home.css";


const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const Home = () => {

  return (
    <section className="home-container" id="home" name="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h1>I’m Junaid</h1>
        <p>I am a
          <span style={{ color: "rgb(97, 89, 89)", fontSize: "1.5rem", fontWeight: 600, marginLeft: "1.5%" }}>
            <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 60,
              cursor: "_",
              deleteSpeed: "40",
              strings: [
                "Full stack developer",
                "Level one seller at Fiverr"
              ]
            }} />
          </span>
        </p>
        <Link
          className="home-btn"
          to={"portfolio"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500}
        >
          See My Work
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={man} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
