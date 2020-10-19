import React from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Main() {
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
