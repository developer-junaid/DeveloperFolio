import React from "react";
import "./../index.css";
import Nav from "../components/Nav";
import Home from "../components/Home";
import Services from "../components/Services";
import { Link as Scroll } from 'react-scroll';

function Main() {
  return (
    <div className="fullpage">
      <section id='s1' className='section s1'>
        <Nav />
        <Home />
      </section>
      <section id='s2' className="section s2">
        <Services />
      </section>
    </div>
  );
}

export default Main;
