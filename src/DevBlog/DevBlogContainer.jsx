const DevBlogContainer = (props) => {
  const hashtag = props.hashtag;
  const blog = props.blog;

  return (
    <>
      <div className="">
        <h4 className="p-4 ">
          This section will be focused on people who wants to start learning
          programming so they don't make the same mistakes I did, and it's
          especially dedicated to those with a background or degree in
          Linguistics. From my own experience, coming from this field brings
          unique challenges that you'll need to tackle along the way.
        </h4>

        <span className="">
          Bootcamps are incredible for learning to build real applications
          quickly. But here's what I've observed time and again: they're so
          focused on hands-on coding that they often skip the essential
          vocabulary, definitions, and core computer science concepts that every
          developer should understand. You end up knowing how to build things
          without fully grasping the "why" behind them. The only way to truly
          fill these knowledge gaps is through reading—diving into blogs,
          documentation, books, and technical articles that explain the
          fundamental concepts bootcamps don't have time to cover.{" "}
          <strong className="">
            Think of this blog as your cheatsheet and a cute and cosy
            documentation database!
          </strong>
        </span>

        <div className="">
          <h1 className="p-4">{blog.title}</h1>
          <div className="">
            {blog.body}
          </div>
        </div>
      </div>
    </>
  );
};

export default DevBlogContainer;
