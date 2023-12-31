import React from "react";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footerr from "./components/Footer/Footerr";
import Contactus from "./Pages/Contactus/Contactus";
import About from "./Pages/About/About";
import Experiences from "./Pages/Experiences/Experiences";
import Projects from "./Pages/Projects/Projects";
import Experties from "./Pages/Experties/Experties";

const Homee = () => {
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
    </div>
  );
};

export default Homee;
