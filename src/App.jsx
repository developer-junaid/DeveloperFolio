import React, { useEffect, useState } from "react"

// Components
import Nav from "components/Nav/Nav"
import Home from "components/Home/Home"
import Menu from "components/Menu/Menu"
import Portfolio from "components/Portfolio"
import Contact from "components/Contact/Contact"
import Services from "components/Services/Services"
import Testimonials from "components/Testimonials/Testimonials"
import Footer from "components/Footer/Footer"
// Sanity
import sanityClient from "client"

// Animation
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projects, setProjects] = useState([])
  const [services, setServices] = useState([])

  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type in ["testimonial", "portfolio","service"]]{
          _type == "testimonial" => {
            id,
            name,
            text,
            country,
            url
          },
          _type == "portfolio" => {
            id,
            title,
            tagline,
            category,
            liveUrl,
            repositoryUrl,
            img{
              asset->{url}
            },
          },
          _type == "service" => {
            title,
            tags,
            icon{
              asset->{url}
            },
          },
        }
        `
      )
      .then((data) => {
        let tempTestimonials = []
        let tempProjects = []
        let tempServices = []

        data.map((doc) => {
          if (doc.country) {
            // It is a testimonial
            tempTestimonials.push(doc)
          } else if (doc.liveUrl) {
            // It is a project
            tempProjects.push(doc)
          } else {
            tempServices.push(doc)
          }

          return null
        })
        setTestimonials(tempTestimonials)
        setProjects(tempProjects)
        setServices(tempServices)
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 })
  }, [])

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
