import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contactus.css";
import Socialmedia from "../Socialmedia/Socialmedia";

const Contactus = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    captchaInput: "",
  });

  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState({ question: "", answer: null });

  // Generate a math CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ["+", "-", "*"];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let answer;
    switch (operation) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
        break;
      default:
        answer = 0;
    }

    setCaptcha({ question: `${num1} ${operation} ${num2}`, answer });
  };

  // Generate CAPTCHA on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }
    if (parseInt(formData.captchaInput) !== captcha.answer) {
      newErrors.captchaInput = "Incorrect CAPTCHA. Please try again.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const userID = "NGaQRe0Mv8h6xv6xl";
    const templateID = "template_547b1xl";
    const serviceID = "service_9pvwbwg";

    emailjs.init(userID);

    emailjs.send(serviceID, templateID, formData).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Your message has been sent successfully!");
        setFormData({ email: "", name: "", message: "", captchaInput: "" });
        generateCaptcha();
      },
      (error) => {
        console.log("Error sending email:", error.text);
        alert("Failed to send your message. Please try again later.");
      }
    );
  };

  return (
    <div className="container contacttus">
      <h2 className="text-center">Contact Us</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="text-center">
            <div className="Socialmedia">
              <Socialmedia />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contacttt">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="Contact">
                  <form onSubmit={sendEmail}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && (
                        <small className="text-danger">{errors.email}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        name="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      {errors.message && (
                        <small className="text-danger">{errors.message}</small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="captcha" className="form-label">
                        Solve the Math Problem: {captcha.question}
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="captchaInput"
                        name="captchaInput"
                        placeholder="Your answer"
                        value={formData.captchaInput}
                        onChange={handleChange}
                        required
                      />
                      {errors.captchaInput && (
                        <small className="text-danger">
                          {errors.captchaInput}
                        </small>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary">
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
