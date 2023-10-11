import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./DashNav.css";

const Logout = () => {
  localStorage.removeItem("username");
};

const DashNavbar = () => {
  return (
    <nav
      className="glassmorphism-container navbar navbar-expand-lg navbar-light"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <div className="container-fluid">
        <RouterLink
          className="nav-link"
          aria-current="page"
          to="home"
          spy={true}
          smooth={true}
          duration={300}
        >
          Blog<span style={{ color: "white" }}>_</span>Dashboard
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <RouterLink className="nav-link" to="/dashboard-home">
                Home
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink className="nav-link" to="/Add-blog">
                Add Blog
              </RouterLink>
            </li>
            <li className="nav-item redwala">
              <RouterLink
                onClick={Logout}
                className="nav-link"
                to="/dashboard-login"
              >
                Log Out
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
