import React from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

function Main() {
  return (
    <div className="main-container">
      <Nav />
      <Home />
      <Skills />
      <Portfolio />
      <Education />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
}

export default Main;
