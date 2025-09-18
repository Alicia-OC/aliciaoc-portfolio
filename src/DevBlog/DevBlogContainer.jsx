const DevBlogContainer = (props) => {
  const hashtag = props.hashtag;
  const blog = props.blog;

  console.log(blog);

  return (
    <>
      <div className="dev-container">
        <h1 id="blog-title">{blog.title}</h1>
        <p className="blog-body">{blog.body}</p>
        <h4>
          This section will be focused on people who wants to start learning
          programming so they don't make the same mistakes I did.
        </h4>
        <span>
          Bootcamps are incredible for learning to build real applications
          quickly. But here's what I've observed time and again: they're so
          focused on hands-on coding that they often skip the essential
          vocabulary, definitions, and core computer science concepts that every
          developer should understand. You end up knowing how to build things
          without fully grasping the "why" behind them. The only way to truly
          fill these knowledge gaps is through reading—diving into blogs,
          documentation, books, and technical articles that explain the
          fundamental concepts bootcamps don't have time to cover.{" "}
          <strong>
            Think of this blog as your cheatsheet and a cute and cosy
            documentation database!
          </strong>
        </span>
      </div>
    </>
  );
};

export default DevBlogContainer;
