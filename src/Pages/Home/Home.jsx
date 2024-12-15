import "./Home.css";
import gifff from "../../Assets/home.gif";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <section className={!isMobile ? "landing2" : "landing"}>
        <div className="landing-text">
          <h1>Leave Codes</h1>
          <p>
            Give Your Thougths, and we will create a Online pressence of it with
            the help of our expertise
          </p>
          <ScrollLink
            className="btn btn-lg"
            aria-current="page"
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
          >
            Let's Connect
          </ScrollLink>
        </div>
        <div className="landing-image" style={{ mixBlendMode: "multiply" }}>
          <img src={gifff} alt="Working Illustration" />
        </div>
      </section>
    </div>
  );
};

export default Home;
