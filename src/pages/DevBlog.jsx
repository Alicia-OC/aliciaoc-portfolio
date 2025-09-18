import SideMenu from "../components/SideMenu";
import DevBlogContainer from "../DevBlog/DevBlogContainer";
import { useState } from "react";
import DevBlogEntry from "../DevBlog/DevBlogEntries";

import "../styles/LogBook.css";

const DevBlog = () => {
  const latestBlog = DevBlogEntry[0];
  const itemsSize = DevBlogEntry.length;

  const [blog, setBlog] = useState(latestBlog);
  const [hashtag, setHashtag] = useState(itemsSize - 1);

  function handleDataFromChild(blogEntry, hahstagNum, month) {
    setBlog(blogEntry);
    setHashtag(hahstagNum);
  }

  return (
    <div className="main-blog-container">
      <div className="side-menu">
        <SideMenu isDevBlog={true} onBlogChange={handleDataFromChild} />
      </div>
      <section
        className="main-blogs-section"
        role="main"
        aria-labelledby="blog-section"
      >
        <DevBlogContainer blog={blog} />
      </section>
    </div>
  );
};

export default DevBlog;
