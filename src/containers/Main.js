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
      <Home />
      <Services />
    </div>
  );
}

export default Main;
