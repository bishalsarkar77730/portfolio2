import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Authdata from "./auth.json";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (username === "") {
      toast.warn("Username is required");
    }
    if (password === "") {
      toast.warn("password is required");
    }
    const user = Authdata.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      localStorage.setItem("username", user.username);
      toast.success("Login Success");
      navigate("/dashboard-home");
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-6 col-lg-5 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <h1 className="fw-normal mb-3">Log In</h1>
                </div>

                <div className="divider d-flex align-items-center my-4"></div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <div className="password-input-wrapper">
                    <div style={{ position: "relative" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="form3Example4"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "10px",
                          transform: "translateY(-50%)",
                        }}
                      >
                        {showPassword ? (
                          <FaRegEyeSlash onClick={togglePasswordVisibility} />
                        ) : (
                          <FaRegEye onClick={togglePasswordVisibility} />
                        )}
                      </div>
                    </div>
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
