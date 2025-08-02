import "./BlogContent.css";

const BlogContent = (props) => {
  const hashtagMonth = props.hashtagMonth;
  const hashtag = props.hashtag;

  const blog = props.blog;

  return (
    <>
      {" "}
      <h1 id="blog-title">
        {hashtagMonth} Blog # {hashtag + 1}
      </h1>
      <div className="blog-header" role="contentinfo">
        <p className="blog-subtitle">
          Date: {blog.date}, Mood before: {blog.moodBefore} Mood after:{" "}
          {blog.moodAfter}
        </p>
      </div>
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-body">{blog.body}</p>
    </>
  );
};

export default BlogContent;
