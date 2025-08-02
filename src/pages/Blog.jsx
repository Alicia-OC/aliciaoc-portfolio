import "./Blog.css";

import BlogEntry from "../Blogs/BlogEntry";
import { useState } from "react";

import Avatar from "../img/Avatar.png";
import useMobileToggle from "../components/useMobileToggle";
import BlogContent from "../Blogs/BlogsContainer";

const Blog = () => {
  const latestBlog = BlogEntry[0].months.slice(-1)[0].items.slice(-1)[0];
  const latestMonth = BlogEntry[0].months.slice(-1)[0].month;
  const itemsSize = BlogEntry[0].months.slice(-1)[0].items.length

  const [blog, setBlog] = useState(latestBlog);
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const [hashtag, setHashtag] = useState(itemsSize - 1);
  const [hashtagMonth, setHashtagMonth] = useState(latestMonth);

  const toggleSubMenu = (button) => {
    setIsOpen((prev) => (prev === button ? null : button));
  };

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  const handleManualToggle = useMobileToggle(toggleSidebar, isSidebarClosed);

  const getOpenNavItems = () => {
    return BlogEntry.map((yearGroup) => (
      <div className="open-navbar" key={yearGroup.year}>
        <h4 className="navbar-group-year">{yearGroup.year}</h4>
        {yearGroup.months.map((monthGroup) => (
          <div key={monthGroup.month}>
            <li>
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
                        onClick={() => {
                          setBlog(item);
                          setHashtag(index);
                          setHashtagMonth(monthGroup.month);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && setBlog(item)}
                      >
                        #{index + 1} {item.date}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </div>
        ))}
      </div>
    ));
  };

  const getClosedNavItems = () => {
    return BlogEntry.map((yearGroup) => (
      <div key={yearGroup.year} className="navbar-small">
        <p className="navbar-group-year-small">
          '{yearGroup.year.toString().substr(2, 3)}
        </p>

        {yearGroup.months.map((monthGroup) => (
          <div key={monthGroup.month}>
            <li>
              <button
                onClick={() => toggleSubMenu(monthGroup.month)}
                className={`dropdown-btn small`}
              >
                <span>{monthGroup.month.substr(0, 3)}</span>
              </button>

              {isOpen === monthGroup.month && (
                <ul className="sub-menu-small show">
                  {monthGroup.items.map((item, index) => (
                    <li key={item.key}>
                      <span
                        className="blog-li"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          setBlog(item);
                          setHashtag(index);
                          setHashtagMonth(monthGroup.month);
                        }}
                        onKeyDown={(e) => e.key === "Enter" && setBlog(item)}
                      >
                        #{index + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="main-blog-container">
      <div className="side-menu">
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
            <div className="nav-head">
              <a href="/" className="got-to-homepage">
                <img
                  src={Avatar}
                  alt="pic profile"
                  className={`img-small ${isSidebarClosed ? "close" : ""}`}
                />{" "}
                <h1 className={`navbar-name ${isSidebarClosed ? "close" : ""}`}>
                  Alicia O.
                </h1>
                <h1
                  className={`navbar-name-small ${
                    isSidebarClosed ? "" : "close"
                  }`}
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
            <div className="blogs-listed">
              {isSidebarClosed ? (
                getClosedNavItems()
              ) : (
                <ul>{getOpenNavItems()}</ul>
              )}
            </div>
          </div>
        </nav>
      </div>

      <section
        className="main-blogs-section"
        role="main"
        aria-labelledby="blog-section"
      >
        <BlogContent
          hashtagMonth={hashtagMonth}
          hashtag={hashtag}
          blog={blog}
        />
      </section>
    </div>
  );
};

export default Blog;
