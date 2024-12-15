import React from "react";
import "./About.css";
import video from "../../Assets/about.gif";

const About = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image">
              <img src={video} alt="Programmer" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hello! I'm Bishal Sarkar, a passionate web developer with a love
                for creating beautiful and functional websites. My goal is to
                turn ideas into reality through clean and efficient code.
              </p>
              <p>
                I have expertise in HTML, CSS, JavaScript, and various
                JavaScript libraries and frameworks such as React, Node,
                Express. I also have expertise in various Database's such as
                MongoDb, My-Sql, Ms-Sql. I also have expertise in various Css
                libraries and frameworks such as Materialize UI, Bootstrap,
                Tailwind, ANTD. I'm constantly learning and exploring new
                technologies to stay ahead in the ever-evolving world of web
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
