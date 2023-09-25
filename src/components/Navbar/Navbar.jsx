import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="glassmorphism-container navbar navbar-expand-lg navbar-light"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <div className="container-fluid">
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
              <Link
                className="nav-link"
                aria-current="page"
                to="home"
                spy={true}
                smooth={true}
                duration={300}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="about"
                spy={true}
                smooth={true}
                duration={300}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="projects"
                spy={true}
                smooth={true}
                duration={300}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#a"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blogs
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#a">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#a">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#a">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="experiences"
                spy={true}
                smooth={true}
                duration={300}
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="contact"
                spy={true}
                smooth={true}
                duration={300}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
