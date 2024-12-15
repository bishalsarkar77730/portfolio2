import React from "react";
import "./Experties.css";

const Experties = () => {
  return (
    <section className="tree-section">
      <div className="tree-container">
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-8 text-center">
            <h2 className="mb-4 display-5">Skills</h2>
            <p className="text-secondary">
              I'm a seasoned web developer with expertise in front-end (HTML,
              CSS, JavaScript), back-end (Node.js), and various databases like
              MongoDB, MySQL, and MsSQL. Skilled in React, Next.js, and
              experienced in delivering user-friendly web projects.
            </p>
          </div>
        </div>
        <div className="tree">
          <div className="branch-container branch-root">
            <div className="branch">
              <span className="branch-title">CSS Libraries</span>
              <div className="leaves">
                <span className="leaf">Bootstrap</span>
                <span className="leaf">MaterialUI</span>
                <span className="leaf">TailwindCSS</span>
                <span className="leaf">ANTD</span>
              </div>
            </div>
          </div>
          <div className="branch-container">
            <div className="branch">
              <span className="branch-title">Frontend Libraries</span>
              <div className="leaves">
                <span className="leaf">ReactJS</span>
                <span className="leaf">NextJS</span>
              </div>
            </div>
          </div>
          <div className="branch-container">
            <div className="branch">
              <span className="branch-title">Backend Libraries</span>
              <div className="leaves">
                <span className="leaf">NodeJS</span>
                <span className="leaf">ExpressJS</span>
                <span className="leaf">Knex</span>
              </div>
            </div>
          </div>
          <div className="branch-container">
            <div className="branch">
              <span className="branch-title">Databases</span>
              <div className="leaves">
                <span className="leaf">MongoDB</span>
                <span className="leaf">MySQL</span>
                <span className="leaf">MsSQL</span>
              </div>
            </div>
          </div>
          <div className="branch-container">
            <div className="branch">
              <span className="branch-title">Programming Languages</span>
              <div className="leaves">
                <span className="leaf">JavaScript</span>
                <span className="leaf">Python</span>
              </div>
            </div>
          </div>
          <div className="branch-container">
            <div className="branch">
              <span className="branch-title">Application Development</span>
              <div className="leaves">
                <span className="leaf">Flutter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experties;
