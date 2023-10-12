import React from "react";
import emailjs from "emailjs-com";
import "./Contactus.css";
import Socialmedia from "../Socialmedia/Socialmedia";

const Contactus = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const userID = "YOUR_EMAILJS_USER_ID";
    const templateID = "YOUR_EMAILJS_TEMPLATE_ID";
    const serviceID = "YOUR_EMAILJS_SERVICE_ID";

    emailjs.init(userID);

    emailjs.sendForm(serviceID, templateID, e.target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-6">
          <div class="text-center">
            <div class="Socialmedia">
              <Socialmedia />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contacttt">
            <div class="row justify-content-center">
              <div class="col-md-12">
                <div class="Contact">
                  <form onSubmit={sendEmail}>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput2" class="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput2"
                        name="name"
                        placeholder="John Doe"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
