import React from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import { Link as Scroll } from "react-scroll";

function Main() {
  return (
    <div className="main-container">
      <Nav />
      <Home />
      <Services />
      <Portfolio />
      <Achievements />
      <Contact />
    </div>
  );
}

export default Main;
