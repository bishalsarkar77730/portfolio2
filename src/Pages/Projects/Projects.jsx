import React from "react";
import "./Projects.css";
import qr from "../../images/qr.png";
import food from "../../images/fooddelivery.jpg";
import chat from "../../images/chat.jpg";
import employe from "../../images/employee.jpg";
import map from "../../images/route.jpg";
import face from "../../images/face.jpg";
import meet from "../../images/meet.jpg";
import block from "../../images/blockchain.png";
import youtube from "../../images/youtube.png";

const Projects = () => {
  return (
    <>
      <section className="projects pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Projects</h3>
            </div>
            <div className="col-6 text-right">
              <a
                className="btn btn-primary mb-3 mr-1"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="btn btn-primary mb-3 "
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img className="img-fluid" alt="100%x280" src={qr} />
                          <div className="card-body">
                            <h4 className="card-title">
                              QR Based Attendance system
                            </h4>
                            <p className="card-text">
                              Attendance Management System with QR code Using
                              React, redux-toolkit and Node with database
                              MongoDB.
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/Attendence_system"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={food}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Food Delivery API</h4>
                            <p className="card-text">
                              Food Ordering API with all possible features like
                              location tracking food ordering and many more
                              Using Nodejs and MongoDB.
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/food_ordering_app"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={chat}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Room based chat App</h4>
                            <p className="card-text">
                              Room based chat app with socket.IO and node.js
                              with react.js we can chat here with multiples
                              people personaly
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/Room-based-chat-app"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={employe}
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Employee management System
                            </h4>
                            <p className="card-text">
                              In this system we can manage payroles companies
                              andd their employes with their salries and All
                              Using MERN stack
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/HUWA"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img className="img-fluid" alt="100%x280" src={map} />
                          <div className="card-body">
                            <h4 className="card-title">
                              MAP system for collage
                            </h4>
                            <p className="card-text">
                              In this system we can share ride between two
                              persons in the same route to tha collage or some
                              where else
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/Collagetoe_MERN"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={face}
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Face Recognation attendance
                            </h4>
                            <p className="card-text">
                              Face Recognation attendance system USing PYthon,
                              pytorch numpy
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/Attendance-using-faceRecognition"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={meet}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Google Meet Clone</h4>
                            <p className="card-text">
                              Google Meet Clone using Socket.IO, Nodejs and
                              React js
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/Meet_Clone"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={block}
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              Dcyntralize Chatt application
                            </h4>
                            <p className="card-text">
                              Dcyntralize Chatt application Using react and Node
                              with Gun3 and blockchain
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/Decyntralized-chat-app"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div
                          className="card"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <img
                            className="img-fluid"
                            alt="100%x280"
                            src={youtube}
                          />
                          <div className="card-body">
                            <h4 className="card-title">Youtube Clone</h4>
                            <p className="card-text">
                              Full Youtube clone With Nodejs and React js
                            </p>
                            <div className="d-flex justify-content-end">
                              <a
                                href="https://github.com/bishalsarkar77730/Youtube-Clone"
                                class="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Goto Code
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Projects;
