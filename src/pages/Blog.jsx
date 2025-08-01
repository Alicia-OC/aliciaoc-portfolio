import "./Blog.css";

import BlogEntry from "../Blogs/BlogEntry";
import { useState } from "react";

import Avatar from "../img/Avatar.png";

const Blog = () => {
  const [blog, setBlog] = useState(BlogEntry[0].months[0].items[0]);
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const toggleSubMenu = (button) => {
    setIsOpen((prev) => (prev === button ? null : button));
  };

  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  const isOpenMap = () => {
    return BlogEntry.map((yearGroup) => (
      <div key={yearGroup.year}>
        <p className="navbar-group-year">{yearGroup.year}</p>
        {yearGroup.months.map((monthGroup) => (
          <div key={monthGroup.month}>
            <li>
              <button
                onClick={() => toggleSubMenu(monthGroup.month)}
                className={`dropdown-btn ${
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
                        onClick={() => setBlog(item)}
                        onKeyDown={(e) => e.key === "Enter" && setBlog(item)}
                      >
                        #{index} {item.date}
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

  const isClosedMap = () => {
    return BlogEntry.map((yearGroup) => (
      <div key={yearGroup.year} className="navbar-small">
        <p className="navbar-group-year-small">
          '
          {yearGroup.year.toString().charAt(2) +
            yearGroup.year.toString().charAt(3)}
        </p>

        {yearGroup.months.map((monthGroup) => (
          <div key={monthGroup.month}>
            <li>
              <button
                onClick={() => toggleSubMenu(monthGroup.month)}
                className={`dropdown-btn ${
                  isOpen !== monthGroup.month ? "" : "small"
                }`}
              >
                <span>{monthGroup.month.charAt(0)}</span>
              </button>

              {isOpen === monthGroup.month && (
                <ul className="sub-menu-small show">
                  {monthGroup.items.map((item, index) => (
                    <li key={item.key}>
                      <span
                        className="blog-li"
                        role="button"
                        tabIndex={0}
                        onClick={() => setBlog(item)}
                        onKeyDown={(e) => e.key === "Enter" && setBlog(item)}
                      >
                        #{index}
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
      <div>
        <nav
          id="sidebar"
          className={`sidebar ${isSidebarClosed ? "close" : ""}`}
          role="navigation"
          aria-label="Blog side navbar"
          aria-hidden={isSidebarClosed}
        >
          <li>
            <span>
              <button
                id="toggle-btn"
                className={`toggle-btn ${isSidebarClosed ? "rotate" : ""}`}
                onClick={(e) => toggleSidebar(e.currentTarget)}
                aria-label={isSidebarClosed ? "Open navbar" : "Close navbar"}
                aria-expanded={!isSidebarClosed}
                aria-controls="sidebar"
              >
                <span>
                  <i className="bi bi-caret-left-fill"></i>
                </span>
              </button>
            </span>
          </li>

          <div className="nav-head">
            <a href="/" className="">
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
            {isSidebarClosed ? isClosedMap() : <ul>{isOpenMap()}</ul>}
          </div>
        </nav>
      </div>

      <section
        className="main-blogs-section"
        role="main"
        aria-labelledby="blog-section"
      >
        <h1 id="blog-title">Blog # {BlogEntry.length + 1}</h1>
        <div className="blog-header" role="contentinfo">
          <p className="blog-subtitle">
            Date: {blog.date}, Mood before: {blog.moodBefore} Mood after:{" "}
            {blog.moodAfter}
          </p>
        </div>
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-body">{blog.body}</p>
      </section>
    </div>
  );
};

export default Blog;
