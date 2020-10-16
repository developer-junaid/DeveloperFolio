import React from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Services from "../components/Services";

function Main() {
  return (
    <div className="main">
      <Nav />
      <Home />
      <Services />
    </div>
  );
}

export default Main;
