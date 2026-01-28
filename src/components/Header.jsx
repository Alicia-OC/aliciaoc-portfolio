import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import pdfFile from "../img/AOC_EN-J.pdf";

const Header = () => {
  const navigate = useNavigate();
  const [locale, setLocale] = useState("EN");

  const handleClick = () => {
    Swal.fire({
      title: "Spanish loc is coming soon, stay tuned!",
      width: 600,
      padding: "3em",
      color: "#F78FB3",
      confirmButtonColor: "#6CA9E3",
    });
  };

  return (
    <div className="main-title">
      <h1>Alicia Olivares Canales</h1>{" "}
      <div className="buttons-container">
        <button
          onClick={() => window.open(pdfFile, "_blank")}
          style={{
            backgroundColor: "#7ED6A3",
            transition: "transform 0.3s ease-in-out",
            color: "white",
          }}
          className="btn header-btn links pyramid-btn"
        >
          Resume
        </button>
        <button
          onClick={() => navigate("/logbook", { replace: false })}
          style={{
            backgroundColor: "#6CA9E3",
            transition: "transform 0.3s ease-in-out",
            color: "white",
          }}
          className="btn header-btn links pyramid-btn"
        >
          Logbook
        </button>
        <button
          onClick={() => navigate("/devblog", { replace: false })}
          style={{
            backgroundColor: "#F78FB3",
            transition: "transform 0.3s ease-in-out",
            color: "white",
          }}
          className="btn header-btn links pyramid-btn"
        >
          Dev Blog
        </button>
        <button
          onClick={handleClick}
          title={`Switch to ${locale === "EN" ? "Spanish" : "English"}`}
          style={{
            backgroundColor: "#7ED6A3",
            transition: "transform 0.3s ease-in-out",
            color: "white",
          }}
          className="btn header-btn locale pyramid-btn"
        >
          {locale}
        </button>
      </div>
      <p>
        Software Developer,<br></br>{" "}
        <p>
          who turned "I can learn that" into a career. Now building cool stuff — 
          and loving it!
        </p>
      </p>
    </div>
  );
};

export default Header;
