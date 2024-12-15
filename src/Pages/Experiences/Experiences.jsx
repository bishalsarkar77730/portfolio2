import React from "react";
import "../Home/Home.css";
import "./experience.css";

const Experiences = () => {
  return (
    <div className="experiences">
      <section className="experiences-section" id="experiences">
        <div className="container">
          <div className="section-header">
            <h2>My Experiences</h2>
            <p className="section-subtitle">
              A glimpse into my professional journey and contributions.
            </p>
          </div>

          <div className="card-box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p class="title">Marko & Brando</p>
                  <p>may 2024 - Present</p>
                </div>
                <div class="flip-card-back">
                  {/* <p class="title">BACK</p> */}
                  <p>
                    Contributed to developing Automation tools Using Javascript
                    and Python. Optimized performance and responsiveness using
                    node.js, React.js and Next.js, ensuring seamless
                    cross-platform functionality.
                  </p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p class="title">Hamilton KW</p>
                  <p>march 2023 - may 2024</p>
                </div>
                <div class="flip-card-back">
                  {/* <p class="title">BACK</p> */}
                  <p>
                    Contributed to developing Automation tools Using Javascript
                    and Python. Optimized performance and responsiveness using
                    node.js, React.js and Next.js, ensuring seamless
                    cross-platform functionality.
                  </p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p class="title">Prolence Tech</p>
                  <p>march 2022 - march 2023</p>
                </div>
                <div class="flip-card-back">
                  {/* <p class="title">BACK</p> */}
                  <p>
                    Contributed to developing Automation tools Using Javascript
                    and Python. Optimized performance and responsiveness using
                    node.js, React.js and Next.js, ensuring seamless
                    cross-platform functionality.
                  </p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p class="title">Freelancer</p>
                  <p>march 2021 - present</p>
                </div>
                <div class="flip-card-back">
                  {/* <p class="title">BACK</p> */}
                  <p>
                    Contributed to developing Automation tools Using Javascript
                    and Python. Optimized performance and responsiveness using
                    node.js, React.js and Next.js, ensuring seamless
                    cross-platform functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
