import { useState } from "react";
import Avatar from "../img/Avatar.png";
import useMobileToggle from "../components/useMobileToggle";


const SideMenu = () => {

  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isOpen, setIsOpen] = useState();

  const toggleSubMenu = (button) => {
    setIsOpen((prev) => (prev === button ? null : button));
  };

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  const handleManualToggle = useMobileToggle(toggleSidebar, isSidebarClosed);

  return (
    <nav
      id="sidebar"
      className={`sidebar ${isSidebarClosed ? "close" : ""}`}
      role="navigation"
      aria-label="Blog side navbar"
      aria-hidden={isSidebarClosed}
    >
      <button
        id="toggle-btn"
        className={`toggle-btn ${isSidebarClosed ? "rotate" : ""}`}
        onClick={handleManualToggle}
        aria-label={isSidebarClosed ? "Open navbar" : "Close navbar"}
        aria-expanded={!isSidebarClosed}
        aria-controls="sidebar"
      >
        <span>
          <i className="bi bi-caret-left-fill"></i>
        </span>
      </button>
      <div className="sidebar-content">
        {" "}
        <div className=" nav-head">
          <a
            href="https://alicia-oc.github.io/aliciaoc-portfolio/"
            className="got-to-homepage"
          >
            <img
              src={Avatar}
              alt="pic profile"
              className={`img-small ${isSidebarClosed ? "close" : ""}`}
            />{" "}
            <h1 className={`navbar-name ${isSidebarClosed ? "close" : ""}`}>
              Alicia O.
            </h1>
            <h1
              className={`navbar-name-small ${isSidebarClosed ? "" : "close"}`}
            >
              A
            </h1>
          </a>
          <div className="social-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:alicia.olivares.canales@gmail.com"
              className="social-link email"
              aria-label="Send mail to Alicia Olivares"
            >
              <i className="bi bi-envelope-at"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Alicia-OC"
              className="social-link github"
              aria-label="Go to Github profile"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alicia-olivares-canales-b0a629141/"
              className="social-link linkedin"
              aria-label="Go to LinkedIn profile"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
