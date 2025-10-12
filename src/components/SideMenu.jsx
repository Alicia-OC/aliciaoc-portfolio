import { useState } from "react";
import Avatar from "../img/Avatar.png";
import useMobileToggle from "../components/useMobileToggle";
import LogBookEntry from "../LogBook/LogBookEntry";
import DevBlogEntry from "../DevBlog/DevBlogEntries";

const SideMenu = (props) => {
  const isDevBlog = props.isDevBlog;

  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isOpen, setIsOpen] = useState();

  const toggleSubMenu = (button) => {
    setIsOpen((prev) => (prev === button ? null : button));
  };

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  const handleManualToggle = useMobileToggle(toggleSidebar, isSidebarClosed);

  function handleBlogClick(item, index, monthGroup = "") {
    props.onBlogChange(item, index, monthGroup.month);
  }
  const getOpenNavItems = () => {
    if (isDevBlog) {
      return DevBlogEntry.map((item) => {
        return (
          <div className="open-navbar" key={item.id}>
            <button
              onClick={() => {
                toggleSubMenu(item.body);
                handleBlogClick(item, item.id);
              }}
              className={`dropdown-btn  ${
                isOpen === item.body ? "rotate" : ""
              }`}
            >
              <i className="bi bi-card-text"></i>
              <span>{item.title}</span>
              <i className="bi bi-caret-down"></i>
            </button>
            {isOpen && (
              <ul className="sub-menu show">
                {item.subEntries.map((item, index) => {
                  return (
                    <li key={item.index}>
                      <span
                        className="blog-li"
                        role="button"
                        tabIndex={0}
                        onClick={() => handleBlogClick(item, index)}
                      >
                        {item.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      });
    } else {
      return LogBookEntry.map((yearGroup) => (
        <div className="open-navbar" key={yearGroup.year}>
          <h4 className="navbar-group-year">{yearGroup.year}</h4>
          {yearGroup.months
            .map((monthGroup) => (
              <div key={monthGroup.month}>
                <button
                  onClick={() => toggleSubMenu(monthGroup.month)}
                  className={`dropdown-btn  ${
                    isOpen === monthGroup.month ? "rotate" : ""
                  }`}
                >
                  <i className="bi bi-card-text"></i>
                  <span>{monthGroup.month}</span>
                  <i className="bi bi-caret-down"></i>
                </button>

                {isOpen === monthGroup.month && (
                  <ul className="sub-menu show">
                    {monthGroup.items.map((item, index) => (
                      <li key={item.key}>
                        <span
                          className="blog-li"
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            handleBlogClick(item, index, monthGroup)
                          }
                        >
                          #{index + 1} {item.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
            .reverse()}
        </div>
      ));
    }
  };

  const getClosedNavItems = () => {
    if (isDevBlog) {
      return (
        <div className="open-navbar">
          <ul className="sub-menu-small show">
            {DevBlogEntry.map((item) => (
              <li>
                {" "}
                <span
                  className="blog-li"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleBlogClick(item, item.id)}
                >
                  {item.mini_title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return LogBookEntry.map((yearGroup) => (
        <div key={yearGroup.year} className="navbar-small">
          <p className="navbar-group-year-small">
            '{yearGroup.year.toString().slice(-2)}
          </p>
          {yearGroup.months
            .map((monthGroup) => (
              <div key={monthGroup.month}>
                <li>
                  <button
                    onClick={() => toggleSubMenu(monthGroup.month)}
                    className={`dropdown-btn small`}
                  >
                    <span>{monthGroup.month.slice(0, 3)}</span>
                  </button>

                  {isOpen === monthGroup.month && (
                    <ul className="sub-menu-small show">
                      {monthGroup.items.map((item, index) => (
                        <li key={item.key}>
                          <span
                            className="blog-li"
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              handleBlogClick(item, index, monthGroup)
                            }
                          >
                            #{index + 1}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </div>
            ))
            .reverse()}
        </div>
      ));
    }
  };

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
          <div className="blogs-listed">
            {isSidebarClosed ? (
              getClosedNavItems()
            ) : (
              <ul>{getOpenNavItems()}</ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
