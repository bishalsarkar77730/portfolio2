import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`glassmorphism-container navbar navbar-expand-lg navbar-light ${
        isMobileMenuOpen ? "mobile-menu-open" : ""
      }`}
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <div className="container-fluid">
        <ScrollLink
          className="nav-link"
          aria-current="page"
          to="home"
          spy={true}
          smooth={true}
          duration={300}
        >
          {!isMobile ? (
            <img className="navimage" src={logo} alt="Bishal Sarkar" />
          ) : (
            <span>LEAVECODES</span>
          )}
        </ScrollLink>
        <button
          className={`navbar-toggler ${isMobileMenuOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isMobileMenuOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                aria-current="page"
                to="home"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeMobileMenu}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                aria-current="page"
                to="about"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeMobileMenu}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                aria-current="page"
                to="projects"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeMobileMenu}
              >
                Projects
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                aria-current="page"
                to="Skills"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeMobileMenu}
              >
                Skills
              </ScrollLink>
            </li>

            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                aria-current="page"
                to="experiences"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeMobileMenu}
              >
                Experiences
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                aria-current="page"
                to="contact"
                spy={true}
                smooth={true}
                duration={300}
                onClick={closeMobileMenu}
              >
                Contact
              </ScrollLink>
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
                Notes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://codewithbishal.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python Programming
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://mysqlwithbishal.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sql & My-sql (DB)
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://pythontkinterbishal.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python (Tkinter)
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://cprogrammwithbishal.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    C Programming
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://javascriptbybishal.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JavaScript
                  </a>
                </li>
              </ul>
            </li>
            <RouterLink to="/blogs" className="nav-link">
              Blogs
            </RouterLink>
            <li className="nav-item">
              <RouterLink to="/dashboard-login" className="nav-link">
                Dashboard
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
