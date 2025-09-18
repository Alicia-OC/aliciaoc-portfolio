import "./LogBook.css";

import LogBookEntry from "../LogBook/LogBookEntry";
import { useState } from "react";

import Avatar from "../img/Avatar.png";
import useMobileToggle from "../components/useMobileToggle";
import BlogContent from "../LogBook/LogBookContainer";

import SideMenu from "../components/SideMenu";

const Blog = () => {
  const latestBlog = LogBookEntry[0].months.slice(-1)[0].items.slice(-1)[0];
  const latestMonth = LogBookEntry[0].months.slice(-1)[0].month;
  const itemsSize = LogBookEntry[0].months.slice(-1)[0].items.length;

  const [blog, setBlog] = useState(latestBlog);
 

  const [hashtag, setHashtag] = useState(itemsSize - 1);
  const [hashtagMonth, setHashtagMonth] = useState(latestMonth);


  function handleDataFromChild(blogEntry, hahstagNum, month) {
    setBlog(blogEntry);
    setHashtag(hahstagNum);
    setHashtagMonth(month);
  }

  return (
    <div className="main-blog-container">
      <div className="side-menu">
        <SideMenu isDevBlog={false} onBlogChange={handleDataFromChild} />
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
