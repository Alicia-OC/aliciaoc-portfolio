import "./Blog.css";

import BlogEntry from "../Blogs/BlogEntry";
import { useEffect, useState } from "react";

import Avatar from "../img/Avatar.png";

const Blog = () => {
  const [blog, setBlog] = useState(BlogEntry[0].months[0].items[0]);


  return (
    <div className="main-blog-container">
      <aside className="sidebar">
        <nav id="navmenu" className="navmenu">
          <div className="nav-head">
            {" "}
            <a href="/" className="">
              <img src={Avatar} alt="Avatar" className="img-small" />{" "}
              <h1 className="navbar-name">Alicia O.</h1>
            </a>
            <div class="social-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:alicia.olivares.canales@gmail.com"
                class="instagram"
              >
                <i class="bi bi-envelope-at"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Alicia-OC"
                class="google-plus"
              >
                <i class="bi bi-github"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/alicia-olivares-canales-b0a629141/"
                class="linkedin"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="nav-blog-entries">
            {" "}
            <ul>
              {BlogEntry.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <p>{yearGroup.year}</p>
                  {yearGroup.months.map((monthGroup) => (
                    <div key={monthGroup.month}>
                      <h3>{monthGroup.month}</h3>
                      <ul>
                        {monthGroup.items.map((item) => (
                          <li key={item.key}>
                            <span
                              className="blog-li"
                              role="button"
                              tabIndex={0}
                              onClick={() => setBlog(item)}
                              onKeyDown={(e) =>
                                e.key === "Enter" && setBlog(item)
                              }
                            >
                              {item.date}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      <section className="main-blogs-section">
        {" "}
        <h1>Blog # {BlogEntry.length + 1}</h1>
        <div className="blog-header">
          {" "}
          <p>Date: {blog.date}, Mood before: {blog.moodBefore} Mood after: {blog.moodAfter}</p>
        </div>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
      </section>
    </div>
  );
};

export default Blog;
