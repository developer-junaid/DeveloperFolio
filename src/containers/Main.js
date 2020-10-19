import React from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

function Main() {
  return (
    <div className="main-container">
      <Nav />
      <Home />
      <Services />
      <Portfolio />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}

export default Main;
