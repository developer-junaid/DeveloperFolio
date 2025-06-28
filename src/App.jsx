import React, { useEffect, useState } from "react";

// Components
import Nav from "components/Nav/Nav";
import Home from "components/Home/Home";
import Menu from "components/Menu/Menu";
import Portfolio from "components/Portfolio";
import Contact from "components/Contact/Contact";
import Services from "components/Services/Services";
import Testimonials from "components/Testimonials/Testimonials";
import Footer from "components/Footer/Footer";

// Custom hooks
import { useSanityData } from "./hooks/useSanityData";

// Constants
import { ANIMATION_CONFIG } from "./constants";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { projects, services, testimonials, loading, error } = useSanityData();

  // Initialize AOS once
  useEffect(() => {
    Aos.init({
      duration: ANIMATION_CONFIG.AOS_DURATION,
      offset: ANIMATION_CONFIG.AOS_OFFSET,
      once: false,
      mirror: true,
    });
  }, []);

  // Refresh AOS when data changes
  useEffect(() => {
    if (!loading) {
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        Aos.refresh();
      });
    }
  }, [loading, projects.length, services.length, testimonials.length]);

  if (error) {
    console.error("Data loading error:", error);
  }

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services services={services} loading={loading} />
      <Portfolio projects={projects} loading={loading} />
      <Testimonials testimonials={testimonials} loading={loading} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
