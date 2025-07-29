import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Projects from "../components/Projects";
import TechnicalSkills from "../components/TechnicalSkills";
import SSkillsEducation from "../components/SSkillsEducation";
import ExperienceCertifications from "../components/ExperienceCertifications";
import WhoAmI from "../components/WhoAmI";
import ContactMe from "../components/ContactMe";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // optional settings like animation duration
      once: true, // only animate once while scrolling down
    });
  }, []);

  const handleClick = () => {
    Swal.fire({
      title: "Coming soon, stay tuned!",
      width: 600,
      padding: "3em",
      color: "#F78FB3",
    });
  };
  return (
    <>
      <div className="main ">
        <section id="about" className="about section">
          <div
            className="container section-title"
            data-aos="fade-right"
            data-aos-delay="10"
          >
            <div className="main-title">
              <h1>Alicia Olivares Canales</h1>{" "}
              <div className="buttons-container">
                <button
                  onClick={() => navigate("/blog", { replace: false })}
                  style={{
                    backgroundColor: "#6CA9E3",
                    transition: "transform 0.3s ease-in-out",
                    color: "white",
                  }}
                  className="btn blog-btn pyramid-btn"
                >
                  Check my blog
                </button>
                <button
                  disabled
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#F78FB3",
                    transition: "transform 0.3s ease-in-out",
                    color: "white",
                  }}
                  id="English-locale"
                  className="btn blog-btn pyramid-btn"
                >
                  EN
                </button>
                <button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#7ED6A3",
                    transition: "transform 0.3s ease-in-out",
                    color: "white",
                  }}
                  className="btn blog-btn pyramid-btn"
                >
                  ES
                </button>
              </div>
              <p>
                Junior Full Stack self-taught looking for her opportunity to{" "}
                <b>shine</b>!
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <ContactMe />
              <WhoAmI />
            </div>
          </div>
        </section>
        <section id="resume" className="main-page">
          <div
            className="container section-title"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h1>Resume</h1>
            <p>
              Self-taught full-stack junior developer with a passion for coding
              and a strong drive to build a career in the IT industry. Curious
              and highly motivated, I’m seeking an opportunity to take on
              challenges and grow both professionally and personally.
            </p>
          </div>
          <div
            className="container section-div"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="row align-items-start">
              <TechnicalSkills />
              <Projects />
            </div>
          </div>
          <div
            className="container section-div"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="row align-items-start ">
              <SSkillsEducation />
              <ExperienceCertifications />
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="footer-container">
            <p>
              &copy; 2025 Alicia Olivares Canales. Built with ♡ and lots of coffee.
            </p>
          </div>
        </footer>{" "}
      </div>
    </>
  );
};

export default Home;
