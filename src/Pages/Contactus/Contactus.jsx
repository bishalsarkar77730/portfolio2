import React from "react";
import emailjs from "emailjs-com";
import "./Contactus.css";

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
    <div className="container contacttt">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="Contact">
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
