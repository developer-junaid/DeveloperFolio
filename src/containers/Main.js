import React from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Services from "../components/Services";
import { Link as Scroll } from "react-scroll";

function Main() {
  return (
    <div className="main-container">
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
  );
}

export default Main;
