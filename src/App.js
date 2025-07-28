import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import SSkillsEducation from "./components/SSkillsEducation";
import ExperienceCertifications from "./components/ExperienceCertifications";
import WhoAmI from "./components/WhoAmI";
import ContactMe from "./components/ContactMe";

import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}


export default App;
