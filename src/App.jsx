import React, { useEffect, useState } from "react";

// Components
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import Portfolio from "components/Portfolio/Portfolio";
import Contact from "components/Contact/Contact";
import Services from "components/Services/Services";
import Testimonials from "components/Testimonials/Testimonials";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";
import { Menu } from "components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
