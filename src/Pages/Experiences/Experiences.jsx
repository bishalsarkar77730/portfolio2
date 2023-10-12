import React from "react";
import "../Home/Home.css";
import "./experience.css";
const Experiences = () => {
  return (
    <div className="experi">
      <section className="features" id="features">
        <div className="container">
          <div className="more-features">
            <div className="section-header">
              <h2>Experiences</h2>
            </div>
            <div className="more-features-content">
              <div className="feature">
                <div className="feature-illustration">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg"
                    alt="Feature Illustration Icon"
                  />
                </div>
                <div className="feature-details">
                  <h3>Prolence Technologies</h3>
                  <p>
                    At Prollence, I successfully brought an externally sourced
                    application in-house, reducing costs by 70% and eliminating
                    external dependencies. I also addressed daily site issues
                    and fixed CSS problems using Materialized UI.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-illustration">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg"
                    alt="Feature Illustration Icon"
                  />
                </div>
                <div className="feature-details">
                  <h3>As Freelancer</h3>
                  <p>
                    Acquired and set up a third-party application in-house,
                    reducing expenses by 70% and eliminating external
                    dependencies. Addressed daily site issues. Fixed CSS
                    problems using Materialized UI.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-illustration">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg"
                    alt="Feature Illustration Icon"
                  />
                </div>
                <div className="feature-details">
                  <h3>Hamilton KW</h3>
                  <p>
                    HamiltonKW specializes in real estate, financial, and
                    industrial asset management solutions and services. Job
                    responsibilities include daily problem-solving on the site,
                    addressing CSS issues with Materialized UI, and creating
                    custom-designed websites using Next and React.
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
