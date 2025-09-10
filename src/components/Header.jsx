import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import pdfFile from "../img/AOC_EN-J.pdf";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    Swal.fire({
      title: "Coming soon, stay tuned!",
      width: 600,
      padding: "3em",
      color: "#F78FB3",
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
          className="btn header-btn pyramid-btn"
        >
          Resume
        </button>
        <button
          onClick={() => navigate("/blog", { replace: false })}
          style={{
            backgroundColor: "#6CA9E3",
            transition: "transform 0.3s ease-in-out",
            color: "white",
          }}
          className="btn header-btn pyramid-btn"
        >
          Blog diaries
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
          className=" btn header-btn pyramid-btn"
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
          className="btn header-btn pyramid-btn"
        >
          ES
        </button>
      </div>
      <p>
        Junior Full Stack self-taught looking for her opportunity to{" "}
        <strong>shine</strong>!
      </p>
    </div>
  );
};

export default Header;
