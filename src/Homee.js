import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footerr from "./components/Footer/Footerr";
import Contactus from "./Pages/Contactus/Contactus";
import About from "./Pages/About/About";
import Experiences from "./Pages/Experiences/Experiences";
import Projects from "./Pages/Projects/Projects";
import Experties from "./Pages/Experties/Experties";
import wp from "./Assets/whatsapp-button.png";

const Homee = () => {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactElement = document.querySelector('[name="contact"]');
      if (contactElement) {
        const contactPosition = contactElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (
          contactPosition.top <= windowHeight &&
          contactPosition.bottom >= 0
        ) {
          setShowWhatsAppButton(false);
        } else {
          setShowWhatsAppButton(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="Skills">
        <Experties />
      </Element>
      <Element name="experiences">
        <Experiences />
      </Element>
      <Element name="contact">
        <Contactus />
      </Element>
      <Footerr />
      <a
        href="https://wa.me/917773015690?text=Hello%20there!"
        className={`whatsapp-button ${!showWhatsAppButton ? "hidden" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={wp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Homee;
