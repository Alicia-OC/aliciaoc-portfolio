const WhoAmI = () => {
  return (
    <div className="col-lg-7" data-aos="fade-left" data-aos-delay="400">
      <div className="about-content">
        <div className="intro">
          <h2>Who am I?</h2>
          <p>
            Ever since I was a kid, I struggled with the idea of doing{" "}
            <i>nothing</i>. I always needed something to keep my mind
            busy—otherwise, boredom and anxiety would creep in. Decades later, I
            was lucky enough to discover something that constantly challenges me
            and keeps my brain engaged... programming!{" "}
          </p>
          <p>
            By the time I discovered my true passion, I had already completed a
            degree and a master’s, and I simply couldn’t afford to quit my PM
            job to start a new career — you know, adulting and bills. But I was
            — and still am — determined to chase my dream. So I started studying
            on my own during the little free time I had: watching tutorials,
            reading blogs, buying courses. And here I am, juggling a million
            things, often exhausted, but genuinely happy — because I’m fighting
            for the life I want.{" "}
            <b>
              I’m a persistent and optimistic person, and I know that one day
              I’ll land my dream job. All of this effort will pay off!
            </b>{" "}
            <br />
            <br />
            Current passion level for programming: I used to eat ice cream when
            I was sad… now I just code.
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
