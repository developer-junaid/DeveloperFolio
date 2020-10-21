import React, { useEffect } from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="main-container">
      <Nav />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
