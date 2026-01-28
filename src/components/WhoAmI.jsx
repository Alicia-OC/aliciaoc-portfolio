const WhoAmI = () => {
  return (
    <div className="col-lg-7" data-aos="fade-left" data-aos-delay="400">
      <div className="about-content">
        <div className="intro">
          <h2>Who am I?</h2>

          <p>
            Ever since I was a kid, I struggled with the idea of doing{" "}
            <i>nothing</i>. I always needed something to keep my mind busy —
            otherwise, boredom and anxiety would creep in. Decades later, I was
            lucky enough to discover something that constantly challenges me and
            keeps my brain engaged… <b>programming</b>.
          </p>

          <p>
            My journey into tech didn’t follow a straight line. By the time I
            discovered my passion for programming, I already had a degree and a
            master’s — and a full-time Localisation PM job I couldn’t exactly
            walk away from (hello, adult responsibilities). So I did what I do
            best:
            <b> I kept going</b>. I taught myself to code in my free time,
            juggling tutorials, courses, side projects, and far too many late
            nights.
          </p>

          <p>
            Today, that persistence has paid off. I work in a hybrid role as a{" "}
            <b>Software Developer, with Product Management responsibilities</b>,
            building features while staying closely involved in how the product
            is shaped and delivered. I write and maintain production code,
            turning requirements into clean, maintainable implementations ,
            while using my product background to anticipate edge cases,
            understand trade-offs, and make thoughtful technical decisions. I
            enjoy being close to the code while still keeping an eye on how each
            feature fits into the bigger picture.
          </p>

          <p>
            <b>
              I’m a naturally curious, optimistic, and stubbornly persistent
              developer.
            </b>{" "}
            I like diving into complex problems, improving existing codebases,
            and refining features until they feel solid and intuitive. Working
            at the intersection of development and product has made me a more
            intentional engineer — someone who doesn’t just ask{" "}
            <i>“can we build this?”</i> but also{" "}
            <i>“should we, and how should it work for users?”</i> I’m always
            learning, always iterating, and exactly where I want to be: building
            products, writing code, and growing as a developer.
          </p>

          <p>
            <i>
              Current passion level for programming: I used to eat ice cream
              when I was sad… now I just code.
            </i>
          </p>
        </div>

        <div className="find-me-grid">
          <div className="find-me-item" data-aos="zoom-in" data-aos-delay="450">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Alicia-OC"
              style={{
                backgroundColor: "#6CA9E3",
                transition: "transform 0.3s ease-in-out",
                color: "white",
              }}
              className="btn find-me-btn"
            >
              Check my projects
            </a>
          </div>
          <div className="find-me-item" data-aos="zoom-in" data-aos-delay="450">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alicia-olivares-canales-b0a629141/"
              style={{
                backgroundColor: "#F78FB3",
                transition: "transform 0.3s ease-in-out",
                color: "white",
              }}
              className="btn find-me-btn"
            >
              Check my LinkedIn
            </a>
          </div>
          <div className="find-me-item" data-aos="zoom-in" data-aos-delay="450">
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/u/EnNx5QGKf7/"
              style={{
                backgroundColor: "#7ED6A3",
                transition: "transform 0.3s ease-in-out",
                color: "white",
              }}
              className="btn find-me-btn"
            >
              Check my LeetCode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAmI;
