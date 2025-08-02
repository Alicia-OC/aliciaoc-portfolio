const happy = <i className="bi bi-emoji-laughing"></i>;
const exhausted = <i className="bi bi-emoji-dizzy"></i>;
const whatAMess = <i className="bi bi-emoji-smile-upside-down"></i>;
const sad = <i className="bi bi-emoji-smile-upside-down"></i>;

const moodBefore = { 1: happy, 2: exhausted, 3: whatAMess };
const moodAfter = { 1: happy, 2: exhausted, 3: whatAMess };

const BlogEntry = [
  {
    year: 2025,
    months: [
      {
        month: "July",
        items: [
          {
            date: "July 25th",
            moodBefore: moodBefore[1],
            moodAfter: moodAfter[1],
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses tracker project
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/watch?v=1fueZCTYkpA&si=YjtMx3JMBkNw3XeK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=1fueZCTYkpA&si=YjtMx3JMBkNw3XeK
                  </a>
                </div>
                <div className="topic-section">
                  <h2 className="feature-title">
                    1. React Protected Routes{" "}
                    <span className="branch-name">
                      feature/protected-routes
                    </span>
                  </h2>

                  <div className="documentation-section">
                    <strong>Documentation followed: </strong>
                    <a
                      href="https://www.robinwieruch.de/react-router-private-routes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.robinwieruch.de/react-router-private-routes/
                    </a>
                  </div>

                  <div className="struggle-level">Struggle: 3/10</div>
                  <p className="note">
                    (The Protected routes component was already coded following
                    another tutorial many days ago so that's why today wasn't a
                    big struggle, this session solidified my knowledge about
                    this feature {happy})
                  </p>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt with the blog:
                    </h3>
                    <ul className="learning-list">
                      <li>
                        Implement protected routes before coding anything else
                        =') adding it after the basics of the frontend has been
                        coded is easy but I rather set the basics before
                        anything else. Before starting the project I made a list
                        of what features the base of my app needed, so this
                        feature will be added to my list in my next project!
                      </li>
                      <li>
                        <span className="component-highlight">
                          &lt;Landing /&gt;
                        </span>{" "}
                        is a component that typically refers to the landing page
                        of your app — the first screen visitors see before
                        logging in or interacting further. Cool feature, will be
                        using it from now on!
                      </li>
                    </ul>
                  </div>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt implementing the feature
                    </h3>
                    <ul className="learning-list">
                      <li>
                        Basic, I KNOW, don't judge: components using hooks need
                        to be wrapped in{" "}
                        <span className="component-highlight">
                          MemoryRouter
                        </span>{" "}
                        when testing them.
                      </li>
                      <li>
                        Creating a new branch LOCALLY, working on it, pushing to
                        the repo, merging it. (not the 1st time I do it but it's
                        the first time that I really felt The Queen of
                        Comfidence while doing it)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    2. Connecting Backend and Frontend{" "}
                    <span className="branch-name">feature/api-integration</span>
                  </h2>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt implementing the feature... or starting
                      cause I never finished the task, I was too tired{" "}
                      {exhausted}
                    </h3>
                    <ul className="learning-list">
                      <li>
                        This is not something I learnt yet something I
                        solidified, even though I know branches are better off
                        created locally, but knowledge does not take place:
                        creating a new branch in GITHUB, fetching branch in
                        local repo
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    3. Starting a Github page to have my CV online
                    <span className="branch-name">feature/api-integration</span>
                  </h2>

                  <div className="learning-section">
                    <h3 className="learning-title">What I've learnt</h3>
                    <div className="documentation-section">
                      <strong>Documentation followed: </strong>
                      <a
                        href="https://bootstrapmade.com/content/demo/SnapFolio/#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://bootstrapmade.com/content/demo/SnapFolio/#{" "}
                      </a>
                      <p> </p>
                      <a
                        href="https://bootstrapmade.com/demo/Style/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://bootstrapmade.com/demo/Style/{" "}
                      </a>
                    </div>
                    <p className="note">I managed to code half of my CV.</p>
                    <ul className="learning-list">
                      <li>
                        For starters, no idea you could host a react app in
                        GitHub so that-s been a huge discovery. Too bad I can't
                        conect a database but it's good enough for a basic
                        portfolio!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            date: "July 26th",
            moodBefore: sad,
            moodAfter: happy,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Focusing on my CV, job offers and
                  portfolio
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/watch?v=1fueZCTYkpA&si=YjtMx3JMBkNw3XeK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=1fueZCTYkpA&si=YjtMx3JMBkNw3XeK
                  </a>
                </div>
                <p className="note">
                  I started the morning reading:
                  https://www.getmanfred.com/en/blog/juniors-no-gracias so not
                  feeling hopeful at all, but I have to keep going on
                </p>
                <div className="topic-section">
                  <h2 className="feature-title">
                    1. Finishing the CV coding, deploying the app and starting
                    the blog pade code
                  </h2>

                  <div className="documentation-section">
                    <strong>Documentation followed: </strong>
                    <a
                      href="https://bootstrapmade.com/content/demo/SnapFolio/#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://bootstrapmade.com/content/demo/SnapFolio/#{" "}
                    </a>
                    <p> </p>
                    <a
                      href="https://bootstrapmade.com/demo/Style/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://bootstrapmade.com/demo/Style/{" "}
                    </a>
                  </div>

                  <div className="struggle-level">Struggle: 7/10</div>
                  <p className="note"></p>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      1. What I've learnt with the templates
                    </h3>
                    <ul className="learning-list">
                      <li>scroll-behavior: smooth;</li>
                      <li>transform: scale(1.05)</li>
                      <li>
                        transition: transform 0.3s ease-in-out; (thanks to
                        chatgpt)
                      </li>
                      <li>
                        h2::after - content: ""; – for adding a CSS line after a
                        title
                      </li>
                      <li>data-aos-delay= ***whatever number***</li>
                    </ul>
                  </div>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      2. What I’ve learnt finishing the page:
                    </h3>
                    <ul className="learning-list">
                      <li>
                        I have discovered{" "}
                        <span className="component-highlight">sweetalert2</span>{" "}
                        and it’s amazing {happy}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            date: "July 30th",
            moodBefore: happy,
            moodAfter: exhausted,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Portfolio's Navbar
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/watch?v=1fueZCTYkpA&si=YjtMx3JMBkNw3XeK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=1fueZCTYkpA&si=YjtMx3JMBkNw3XeK
                  </a>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. Blog section Side Menu - Collapsed Navbar
                  </h2>

                  <div className="documentation-section">
                    <strong>Documentation followed: </strong>
                    <a
                      href="https://www.youtube.com/watch?v=R7b3OlEyqug"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.youtube.com/watch?v=R7b3OlEyqug
                    </a>
                  </div>

                  <div className="struggle-level">Struggle: 15/10</div>
                  <p className="note">
                    Oh my dear lord I honestly thought this would take me one
                    evening... This is driving me nuts
                  </p>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt with the tutorial:
                    </h3>
                    <ul className="learning-list">
                      <li>
                        Everything honestly XD so much css, transitions, etc.
                        Sadly I was too focus and on tryhard mode to stop to
                        take note of the things I was doing or learning T_T
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        month: "August",
        items: [
          {
            date: "August 1st",
            moodBefore: happy,
            moodAfter: exhausted,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Binary additions + Nvabar
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/playlist?list=RDCLAK5uy_kUBduAP2lWlpASoiIVI_b9mW19yCUQZQA&playnext=1&si=YyojvI3fuxAqxWsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/playlist?list=RDCLAK5uy_kUBduAP2lWlpASoiIVI_b9mW19yCUQZQA&playnext=1&si=YyojvI3fuxAqxWsi
                  </a>
                </div>

                <p className="note">Yes, still working on the navbar....</p>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. Learning Binary additions to solve today’s leetcode
                    problem
                  </h2>

                  <div className="documentation-section">
                    <p className="note">
                      I usually need max 30min to solve a LeetCode problem,
                      well... boy oh boy was this a long ride {happy}. The
                      hardest leetcode problem I’ve done so far but I feel I
                      have gained a better understanding of how binary sums
                      work. I was only able to hit 8ms and 3 ms but I’m
                      satisfied for now. Funny that the top answer to this
                      problem solved it un just 2 lines XD.
                    </p>
                    <strong>Documentation followed: </strong>
                    <a
                      href="https://www.cuemath.com/numbers/binary-addition/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.cuemath.com/numbers/binary-addition/
                    </a>
                  </div>

                  <div className="struggle-level">Struggle: 20/10</div>
                  <p className="note"></p>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt with the blog:
                    </h3>
                    <ul className="learning-list">
                      <li>
                        I already studied binary a long time ago, at that time I
                        honestly felt I didn't understood a single thing, but
                        thanks to this problem I've realised my brain actually
                        asimilated some of the logic {happy}. Now I don't
                        struggle that much understanding the equivalent of
                        binaries!
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">2. Claude</h2>
                  <p className="note">
                    What in the actual heaven and unicorn's land is this AI! I'm
                    amazed by how useful this is for students like me. I love
                    the fact that Claude doesn't give you the answer straight
                    away and instead focuses on suggesting you improvements
                  </p>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt thanks to CLAUDE
                    </h3>
                    <ul className="learning-list">
                      <li>
                        Accessibility: aria-label, aria-expanded and
                        aria-controls
                      </li>
                      <li>
                        I also learnt that... my code isn't that bad, or so
                        thinks Claude! {happy}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            date: "August 2nd",
            moodBefore: happy,
            moodAfter: exhausted,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Finishing Navbar, blogs section +
                  deploying!
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  Summer hits:{" "}
                  <a
                    href="https://music.youtube.com/playlist?list=RDCLAK5uy_kUBduAP2lWlpASoiIVI_b9mW19yCUQZQA&playnext=1&si=YyojvI3fuxAqxWsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/playlist?list=RDCLAK5uy_kUBduAP2lWlpASoiIVI_b9mW19yCUQZQA&playnext=1&si=YyojvI3fuxAqxWsi
                  </a>
                </div>

                <p className="note">
                  Yes, still working on the navbar {sad} but today is the day, I
                  can smell it!!!!
                </p>

                <div className="topic-section">
                  <h2 className="feature-title">1. Finishing Navbar</h2>

                  <div className="struggle-level">Struggle: 7/10</div>
                  <p className="note">
                    {" "}
                    Today was good! I was able to fix most of the navbar bugs,
                    it now collapses thanks to a toggle button and it's
                    responsive, so the navbar will close automatically if the
                    app detects that the screen is less than 760px! Claude help
                    me a bit {happy}. Overall I'm very happy with myself, I've
                    coded a lot and I haven't had that much help with the
                    Navbar. The tutorial gave me the basics but I ended up
                    following just half of the video and then continuing alone.
                  </p>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt with the blog:
                    </h3>
                    <ul className="learning-list">
                      <li>
                        Today I have learnt how to add a button on top of two
                        different sections, it was a nice challenge! left:
                        calc(var(--sidebar-width, 230px));
                      </li>
                      <li> transform: translateY(-2px);</li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    2. Blog layout and deployment
                  </h2>
                  <p className="note">
                    I Asked Claude for help with the blog layout. I love UI/UX
                    design but I've been working on this for longer than
                    expected, I though this would take me 2-3 days and it ended
                    up taking me 7, so I asked Claude to give me an html based
                    on a plain text with basic format (bold, italics, etc. I was
                    storing my blogs in a basic word doc)
                  </p>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What I've learnt thanks to CLAUDE
                    </h3>
                    <ul className="learning-list">
                      <p className="note">
                        Basically... all the layout you are seeing {happy}. I
                        have never focused on laying out a blog, so I never took
                        the time to learn how to do the cool things you're
                        seeing!
                      </p>
                      <li>Cool code for branch-name</li>
                      <li>Brackets with '&amp;lt;</li>
                      <li>Overall ideas and creativity.</li>
                    </ul>
                  </div>
                </div>
                <p className="note">
                  It's 6Pm and the only break i had was 40min while having diner
                  and because I'm currently doing a magnetotherapy treatment for
                  my lovely foot that's been broken for the whole summer, so...
                  Alicia is out, see ya, bye bye, no more code for the weekend,
                  sayonara, it's gaming time!
                </p>
              </div>
            ),
          },
        ],
      },
    ],
  },
];

export default BlogEntry;
