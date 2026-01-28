import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

import Header from "../components/Header";

import ContactMe from "../components/ContactMe";
import WhoAmI from "../components/WhoAmI";

import TechnicalSkills from "../components/TechnicalSkills";
import Projects from "../components/Projects";

import SSkillsEducation from "../components/SSkillsEducation";
import ExperienceCertifications from "../components/ExperienceCertifications";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // optional settings like animation duration
      once: true, // only animate once while scrolling down
    });
  }, []);

  return (
    <>
      <div className="main">
        <section id="about" className="main-page about section">
          <div
            className="container section-title"
            data-aos="fade-right"
            data-aos-delay="10"
          >
            <Header />
          </div>

          <div className="container who-am-i-section">
            <div className="row align-items-center">
              <ContactMe />
              <WhoAmI />
            </div>
          </div>
        </section>
        <section id="resume-p1" className="main-page resume">
          <div
            className="container section-title"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h1>Resume</h1>
            <p>
              Full-stack developer with hands-on experience in product
              management. Skilled in delivering solutions that combine technical
              expertise and strategic vision. Motivated to drive impact and
              growth.
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
        </section>
        <section id="resume-p1" className="main-page resume">
          {" "}
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
        <footer className="footer">
          <div className="footer-container">
            <p>
              &copy; 2025 Alicia Olivares Canales. Built with ♡ and lots of
              coffee.
            </p>
          </div>
        </footer>{" "}
      </div>
    </>
  );
};

export default Home;
