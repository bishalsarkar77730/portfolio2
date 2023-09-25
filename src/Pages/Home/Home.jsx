import "./Home.css";
import gifff from "../../Assets/home.gif"

const Home = () => {
  return (
    <div>
      <section className="landing">
        <div className="landing-text">
          <h1>Hey I'am Bishal Sarkar, Fullstack Developer</h1>
          <p>
            Give Your Thougths, and I will create a Online pressence of it with
            the help of my expertise
          </p>
          <a
            href="https://www.fiverr.com/bishal_sarkar_?up_rollout=true"
            className="btn btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire-Me
          </a>
        </div>
        <div className="landing-image">
          <img
            src={gifff}
            alt="Working Illustration"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
