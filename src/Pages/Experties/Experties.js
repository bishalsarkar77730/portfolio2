import React from "react";
import "./Experties.css";

const Experties = () => {
  return (
    <>
      <section className="py-5 py-xl-6">
        <div className="container mb-5 mb-md-6">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h2 className="mb-4 display-5">Skills</h2>
              <p className="text-secondary mb-4 mb-md-5">
                I'm a seasoned web developer with expertise in front-end (HTML,
                CSS, JavaScript), back-end (Node.js), and various databases Like
                (MongoDB, MySQL, MsSQL). Skilled in (React, Next.js), and
                experienced in delivering user-friendly web projects.
              </p>
              <hr className="w-50 mx-auto mb-0 text-secondary" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row justify-content-xl-center gy-3 gy-sm-4">
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">CSS Libraries </h3>
                <p className="text-secondary fst-italic mb-4">
                  Bootstrap, MaterialUI, TailwindCSs, ANTD.
                </p>
                <div className="progress">
                  <div
                    className="progress-bar w-75 progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Bootstrap"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Frontend Libraries</h3>
                <p className="text-secondary fst-italic mb-4">
                  Reactjs, NextJs
                </p>
                <div className="progress">
                  <div
                    className="progress-bar w-80 progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Reactjs"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Backend Libraries</h3>
                <p className="text-secondary fst-italic mb-4">
                  NodeJs, ExpressJs, Knex
                </p>
                <div className="progress">
                  <div
                    className="progress-bar w-90 progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="Vue"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Databse</h3>
                <p className="text-secondary fst-italic mb-4">
                  MongoDB, MySQL, MsSQL
                </p>
                <div className="progress">
                  <div
                    className="progress-bar w-85 progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="WordPress"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Programing Languages</h3>
                <p className="text-secondary fst-italic mb-4">
                  JavaScript, Python
                </p>
                <div className="progress">
                  <div
                    className="progress-bar w-80 progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="WordPress"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-5">
              <div className="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
                <h3 className="fw-bold mb-2">Application Development</h3>
                <p className="text-secondary fst-italic mb-4">
                  Flutter
                </p>
                <div className="progress">
                  <div
                    className="progress-bar w-20 progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-label="WordPress"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experties;
