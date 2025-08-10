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
          {
            date: "August 5th",
            moodBefore: moodBefore[1],
            moodAfter: moodAfter[1],
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/watch?v=T_xuTlGjVNE&list=LM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=T_xuTlGjVNE&list=LM
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1722873359/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      {" "}
                      <strong>Remove Duplicates from Sorted List</strong>
                    </a>{" "}
                    Getting back into the algorithm groove!
                  </p>
                </div>

                <div className="discovery-section">
                  <h3 className="learning-title">Today's Big Discovery:</h3>
                  <p className="note">
                    Started the coding session going into the wild jungle that
                    is Mongoose relationships. Turns out… object references in
                    Mongoose weren't working as I expected. Enter my new best
                    friend:
                    <span className="component-highlight">.populate()</span> —
                    an elegant way to avoid messy loops and endless .findById()
                    calls. Seriously, feels like discovering a cheat code.
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">1. Backend Security Patch</h2>

                  <div className="struggle-level">Struggle: 3/10</div>
                  <p className="note">
                    The backend was casually sending passwords to the frontend.
                    Not great.
                  </p>

                  <div className="learning-section">
                    <h3 className="learning-title">Solution implemented:</h3>
                    <div className="code-block">
                      <pre>
                        {`const userWithoutPassword = user.toJSON();
delete userWithoutPassword.password;
res.status(200).json({ user: userWithoutPassword, token });`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    2. Display Recent Cards - Widget
                  </h2>

                  <div className="struggle-level">Struggle: 4/10</div>
                  <p className="note">
                    Widget found in the user profile for quick access to recent
                    work.
                  </p>

                  <div className="learning-section">
                    <h3 className="learning-title">What I implemented:</h3>
                    <ul className="learning-list">
                      <li>Created a new reducer to fetch the last 4 cards</li>
                      <li>Implemented the backend route</li>
                      <li>
                        Updated the Recent Cards component in the profile to
                        call the backend directly
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">3. Cards Library Component</h2>

                  <div className="struggle-level">Struggle: 6/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">Features completed:</h3>
                    <ul className="learning-list">
                      <li>
                        Calls the backend, fetches data, and renders beautifully
                      </li>
                      <li>Basic pagination structure in place</li>
                    </ul>
                  </div>

                  <div className="bug-section">
                    <h3 className="learning-title">Bug discovered:</h3>
                    <p className="note">
                      The controller only returns the last 4 cards, but the
                      library is meant to fetch
                      <em>all</em> cards (with pagination).
                    </p>
                    <p className="note">
                      <strong>GitHub issue opened:</strong> "Component only
                      fetches 4 cards despite having pagination for unlimited
                      cards."
                    </p>
                    <p className="note">
                      <strong>Plan:</strong> Rework so it fetches <em>all</em>{" "}
                      cards but limits the data fetched for each one.
                    </p>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">4. Redux Cleanup</h2>

                  <div className="struggle-level">Struggle: 1/10</div>
                  <p className="note">
                    Redux now sets userID <em>after</em> fetching the user
                    object, instead of handling it separately. Little detail,
                    big sanity win.
                  </p>
                </div>

                <div className="diary-section">
                  <h3 className="learning-title">Daily Reflection:</h3>
                  <p className="note">
                    Today felt like a balancing act between bug fixes, new
                    features, and detective work in Mongoose. Progress was made,
                    coffee was consumed, and a few "aha!" moments made it all
                    worth it. {happy}
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 6th", // Assuming this is the next day
            moodBefore: moodBefore[1],
            moodAfter: moodAfter[1],
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hits:</div>
                  <div className="playlist-links">
                    <ul>
                      <li>
                        <a
                          href="https://music.youtube.com/watch?v=GyuboJJluE4&list=LM"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=GyuboJJluE4&list=LM
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://music.youtube.com/watch?v=22WhZdYNAPc&list=LM"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=22WhZdYNAPc&list=LM
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://music.youtube.com/watch?v=34O4TxvuEKE&list=LM"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=34O4TxvuEKE&list=LM
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1724763671/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      {" "}
                      <strong>Binary Tree Inorder Traversal</strong>
                    </a>{" "}
                  </p>
                </div>

                <div className="diary-section">
                  <h3 className="learning-title">Today's Reality Check:</h3>
                  <p className="note">
                    The deeper I go into API integration, the more I realize
                    just how much work hides behind preparing a full MERN stack
                    app. I thought connecting the frontend to the backend would
                    be a quick win—a neat, straightforward conexion. But reality
                    check: the frontend needs to fetch data from more places
                    than I expected, and that meant discovering a whole set of
                    missing routes, reducers, and controllers.
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. Two New Reusable Components
                  </h2>

                  <div className="struggle-level">Struggle: 3/10</div>
                  <p className="note">
                    <span className="component-highlight">
                      ItemsExpenseList
                    </span>
                    and{" "}
                    <span className="component-highlight">CategorySection</span>{" "}
                    — created in frontend to eliminate repetitive code and keep
                    things DRY.
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">2. Month Cards Rendering</h2>

                  <div className="struggle-level">Struggle: 6/10</div>
                  <p className="note">
                    Frontend now renders any month card the user has created,
                    fetching data directly from the API.
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">3. Code Cleaning</h2>

                  <div className="struggle-level">Struggle: 1/10</div>
                  <p className="note">
                    Trimmed down clutter in frontend. Sometimes the best code is
                    the code you delete!
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">4. Props for Reuse</h2>

                  <div className="struggle-level">Struggle: 1/10</div>
                  <p className="note">
                    Passed props to{" "}
                    <span className="component-highlight">ExpensesSummary</span>{" "}
                    so it can adapt to any dataset fetched from the backend.
                    Flexibility FTW!
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    5. Backend Refactor: Cleaner Calculations
                    <span className="branch-name">
                      refactor/cleaner-calculations
                    </span>
                  </h2>

                  <div className="struggle-level">Struggle: 3/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">Before vs After:</h3>
                    <div className="code-comparison">
                      <div className="code-block">
                        <strong>Before:</strong>
                        <pre>
                          {`const calcTransportExpenses = () => {
  let sum = 0;
  for (let index = 0; index < transportItems.length; index++) {
    sum += transportItems[index].price;
  }
  return sum;
};`}
                        </pre>
                      </div>
                      <div className="code-block">
                        <strong>After:</strong>
                        <pre>
                          {`const calcTransportExpenses = () =>
  transportItems.items.reduce((sum, item) => sum + item.price, 0);`}
                        </pre>
                      </div>
                    </div>
                    <p className="note">
                      One line, same logic, less visual noise.{" "}
                      <span className="component-highlight">.reduce()</span>
                      is not just cleaner, it's oddly satisfying to use.
                    </p>
                  </div>
                </div>

                <div className="learning-section">
                  <h3 className="learning-title">Important Things I Learnt:</h3>
                  <ul className="learning-list">
                    <li>
                      Always handle{" "}
                      <span className="component-highlight">
                        setIsLoading(true/false)
                      </span>{" "}
                      when calling the API to avoid rendering hiccups
                    </li>
                    <li>
                      Backend dynamic routing can create conflicts—fixed mine by
                      simply reordering the lines
                    </li>
                    <li>
                      <span className="component-highlight">.reduce()</span> is
                      not just cleaner, it's oddly satisfying to use
                    </li>
                  </ul>
                </div>

                <div className="funny-section">
                  <h3 className="learning-title">
                    Today's Funny Junior Issue:
                  </h3>
                  <p className="note">
                    I have a small component that calculates and displays
                    monthly savings, expenses, and income. What I{" "}
                    <em>didn't</em> think about? Without a{" "}
                    <span className="component-highlight">Math.floor()</span>,
                    those savings numbers can get… hilariously messy. Let's just
                    say decimals ran wild today! {happy}
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 7th",
            moodBefore: happy,
            moodAfter: exhausted,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/watch?v=qiEEMFz2Mdk&list=RDAMPLPLkGblOk4X-alFugUkNHdE7iI8wBavzRBi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=qiEEMFz2Mdk&list=RDAMPLPLkGblOk4X-alFugUkNHdE7iI8wBavzRBi
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>

                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1727154737/
"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Same Tree</strong>{" "}
                    </a>
                  </p>
                </div>

                <div className="documentation-section">
                  <strong>Documentation followed: </strong>
                  <a
                    href="https://dev.to/egnoel/how-to-verify-jwt-token-expiry-in-reactnext-22dn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://dev.to/egnoel/how-to-verify-jwt-token-expiry-in-reactnext-22dn
                  </a>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. JWT Expire Check in Frontend
                  </h2>
                  <p className="note">
                    Implementing token expiration validation to keep the app
                    secure.
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    2. Massive Update: Editable Current Month Card
                  </h2>

                  <div className="struggle-level">Struggle: 7/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">What was implemented:</h3>
                    <ul className="learning-list">
                      <li>Users can now update their current month card</li>
                      <li>
                        This was <em>way</em> harder than expected—caused a
                        chain reaction of bugs because I didn't plan the data
                        flow in advance
                      </li>
                    </ul>
                  </div>

                  <div className="bug-section">
                    <h3 className="learning-title">Issues ranged from:</h3>
                    <ul className="learning-list">
                      <li>How I fetched the data</li>
                      <li>What data the backend actually needed</li>
                      <li>What data the backend sent back</li>
                      <li>
                        Random "I'll just add this in the frontend" ideas that
                        later exploded in the backend
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Struggle Breakdown:</h2>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      1. Where to Put the JWT Expiration Check
                    </h3>
                    <div className="struggle-level">Struggle: 3/10</div>
                    <p className="note">
                      Debated between main, app, and Dashboard. Settled on
                      Dashboard as the cleanest option.
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      2. Updating the Current Month Card
                    </h3>
                    <div className="struggle-level">Struggle: 8/10</div>
                    <ul className="learning-list">
                      <li>
                        The loop I coded at the beginning wouldn't work with my
                        current code due to some changes I made in the Card
                        model in the backend. Additionally, the new items added
                        by the user were sent to the backend in a way the
                        backend couldn't read properly.
                      </li>
                      <li>
                        Ran into the classic junior trap:{" "}
                        <span className="component-highlight">useState</span>{" "}
                        conflicts because the data I sent was not updated yet
                      </li>
                    </ul>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      3. The Big UpdateCard Bug
                    </h3>
                    <div className="struggle-level">Struggle: 10/10</div>
                    <p className="note">
                      Thought I had finally fixed everything… until I made a
                      "successful" update call that
                      <strong> deleted all the properties</strong> I actually
                      wanted to update. Not only I didn't add new key values, I
                      deleted the object's key, erased completely!
                    </p>

                    <div className="code-comparison">
                      <div className="code-block">
                        <strong>The culprit:</strong>
                        <pre>card.fixedItems = fixedItems;</pre>
                      </div>
                      <div className="code-block">
                        <strong>Instead of:</strong>
                        <pre>card.fixedItems.items = fixedItems;</pre>
                      </div>
                    </div>

                    <p className="note">
                      The fix was easy, but it took a while to notice.
                    </p>
                  </div>
                  <div className="victory-section">
                    <h3 className="learning-title">Victory Moment:</h3>
                    <p className="note">
                      Did I clap, cheer, and do <em>the wave</em> alone in my
                      room when I finally fixed UpdateCard and it was fully
                      working—while my cat looked mildly concerned?{" "}
                      <strong>OF COURSE I DID.</strong>
                    </p>

                    <div className="playlist-section">
                      <div className="playlist-label">Victory song:</div>
                      <a
                        href="https://music.youtube.com/watch?v=Ns3MbpQMNBs&list=RDAMPLPLkGblOk4X-alFugUkNHdE7iI8wBavzRBi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        https://music.youtube.com/watch?v=Ns3MbpQMNBs&list=RDAMPLPLkGblOk4X-alFugUkNHdE7iI8wBavzRBi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          {
            date: "August 8th",
            moodBefore: happy,
            moodAfter: exhausted,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="mood-section">
                  <h3 className="learning-title">Mood of the Day:</h3>
                  <p className="note">
                    🥴 A mix of "Yes! The Library is fixed!" and "Why does
                    everything else suddenly break when I touch it?" It's that
                    special type of tired where you're still proud of the
                    progress… but you also glare at your code like it personally
                    betrayed you.
                  </p>
                </div>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/watch?v=uUnbxbHZBUc&list=RDCLAK5uy_mio8NKN0dPfEdyHxD9gDJK2iUYD4NELPk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=uUnbxbHZBUc&list=RDCLAK5uy_mio8NKN0dPfEdyHxD9gDJK2iUYD4NELPk
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1728106601/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>
                        Convert Sorted Array to Binary Search Tree
                      </strong>{" "}
                    </a>
                  </p>
                </div>

                <div className="documentation-section">
                  <strong>Documentation followed:</strong>
                  <div className="doc-links">
                    <ul></ul>
                    <li>
                      {" "}
                      <a
                        href="https://medium.com/@python-javascript-php-html-css/building-a-binary-search-tree-from-a-javascript-array-374678de88ab"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Building a Binary Search Tree from a JavaScript Array
                      </a>
                    </li>{" "}
                    <li>
                      <a
                        href="https://javascript.plainenglish.io/leetcode-algorithm-challenges-convert-sorted-array-to-binary-search-tree-a0f3e7b18fd4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LeetCode Algorithm Challenges - Convert Sorted Array to
                        BST
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://react.dev/reference/react/useMemo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React useMemo Reference
                      </a>
                    </li>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. Library Component Bug—Finally Squashed
                  </h2>

                  <div className="struggle-level">Struggle: 2/10</div>
                  <p className="note">
                    Created a new backend controller so the Library component
                    now fetches <strong>all</strong> cards instead of just the
                    last 4.
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    2. New Card Creation Reality Check
                  </h2>

                  <div className="struggle-level">Struggle: 8/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">The Discovery:</h3>
                    <ul className="learning-list">
                      <li>
                        Discovered I had never actually thought about{" "}
                        <strong>how</strong> to create a new card from the
                        frontend
                      </li>
                      <li>
                        Added an ugly placeholder button and tried the backend
                        controller… only to realize it was coded to add a fully
                        filled card – good to test at the beginning with
                        postman, bad for everything else :D
                      </li>
                      <li>
                        New card from frontend = expected to be empty. My
                        backend = <strong>nope.</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    3. Default Items for New Cards
                  </h2>

                  <div className="struggle-level">Struggle: 9/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">The Implementation:</h3>
                    <p className="note">
                      Took the opportunity to add defaultItems for each user so
                      new cards start with a prefilled template they can
                      customize. This was scheduled for way later on in the
                      roadmap, but I couldn't help myself and just implemented
                      it.
                    </p>
                    <p className="note">
                      In theory, brilliant. In practice… bugs, tears, and sweat.
                    </p>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    4. Progress with Default Items in Mongoose
                  </h2>

                  <div className="struggle-level">Struggle: 8/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">
                      What worked vs what didn't:
                    </h3>
                    <ul className="learning-list">
                      <li>
                        Managed to create new users with defaultItems in the
                        Mongoose model
                      </li>
                      <li>
                        Prefilled defaults worked, but creating a{" "}
                        <strong>new</strong> card with them? Still buggy
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Struggle:</h2>
                  <div className="struggle-level">Overall Struggle: 8.5/10</div>
                  <p className="note">
                    Too many to count. The biggest? My bad approach with
                    defaultItems—I just couldn't grab their values correctly
                    when creating a new card.
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 9th",
            moodBefore: happy,
            moodAfter: exhausted,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">
                    Today's playlist/hits (I needed a lot of energy for what was
                    coming lol):
                  </div>
                  <div className="playlist-links">
                    <ul>
                      <li>
                        {" "}
                        <a
                          href="https://music.youtube.com/watch?v=HkeWAJGtlOk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=HkeWAJGtlOk
                        </a>
                      </li>{" "}
                      <li>
                        <a
                          href="https://music.youtube.com/watch?v=rkE_oBe8ABw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=rkE_oBe8ABw&
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://music.youtube.com/watch?v=wKH-vf33HPc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=wKH-vf33HPc
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenges of the Day:
                  </h3>

                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1729024624/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Merge Strings Alternately</strong>
                    </a>
                  </p>

                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1729024624/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Merge Strings Alternately</strong>
                    </a>
                  </p>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1729043653/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Kids With the Greatest Number of Candies</strong>
                    </a>
                  </p>
                </div>

                <div className="diary-section">
                  <h3 className="learning-title">Today's Victory:</h3>
                  <p className="note">
                    All the basics of the app are working. The victory is MINE.
                    🎉
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. DefaultItems Nesting Issue
                  </h2>

                  <div className="struggle-level">Struggle: 6/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">The Fix:</h3>
                    <ul className="learning-list">
                      <li>
                        Discovered that my defaultItems structure was too deeply
                        nested
                      </li>
                      <li>
                        Mongoose behaved strangely with it, so I simplified the
                        schema and shortened the code
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    2. Empty Card Creation—Finally Working
                  </h2>

                  <div className="struggle-level">Struggle: 8/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">The Achievement:</h3>
                    <ul className="learning-list">
                      <li>
                        After many attempts, the card component can now access a
                        user's defaultItems and set them as the starting items
                        in a new card
                      </li>
                      <li>
                        Users can create an empty card… but only one per month.
                        No duplicates allowed
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">3. Routing Bug Squashed</h2>

                  <div className="struggle-level">Struggle: 3/10</div>
                  <p className="note">
                    Fixed a minor routing issue that was sending users to
                    /landing instead of /.
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">4. Landing Page UI</h2>

                  <div className="struggle-level">Struggle: 4/10</div>
                  <p className="note">
                    Started working on the landing page layout. Still ugly. Very
                    ugly. But it's a start.
                  </p>
                </div>

                <div className="final-thoughts-section">
                  <h3 className="learning-title">Final Thought Diary:</h3>
                  <p className="note">
                    That satisfied-but-exhausted feeling when the big roadblock
                    is finally gone. Today was a "code boss fight" and I won.
                    The landing page may be ugly, but at least it exists.
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 10th",
            moodBefore: moodBefore[1],
            moodAfter: moodAfter[1],
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>
                <div className="playlist-section">
                  <div className="playlist-label">
                    Today's playlist/hits, a cozy way to finish the week with my
                    fav. Ghibli movie and soundtrack!:
                  </div>
                  <div className="playlist-links">
                    <a
                      href="https://music.youtube.com/watch?v=QojIn-Gn2sU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      https://music.youtube.com/watch?v=QojIn-Gn2sU{" "}
                    </a>
                  </div>
                  <img
                    src="https://i.pinimg.com/736x/c4/c5/ea/c4c5eac26203b38cdd3e81702205fa9a.jpg"
                    alt="Sunday coding vibes"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      margin: "10px 0",
                    }}
                  />
                </div>
                <div className="sunday-mode-section">
                  <h3 className="learning-title">Sunday Mode:</h3>
                  <p className="note">
                    Light coding, comfy vibes, and a pinch of curiosity. Today
                    wasn't about building features—it was about stretching the
                    brain in a different way.
                  </p>
                </div>

                <div className="diary-section">
                  <h3 className="learning-title">Today's Discovery:</h3>
                  <p className="note">
                    I discovered a{" "}
                    <strong>30 Days of JavaScript Challenge</strong> on LeetCode
                    and decided to dive in. Planned for just one… ended up doing
                    seven. (Will I do more after writing this? Possibly. Will my
                    coffee make the decision for me? No—because I don't drink
                    coffee past noon—but matchas are more than welcome!)
                  </p>
                </div>

                <div className="challenge-section">
                  <h2 className="feature-title">
                    30 Days of JavaScript Challenge - Progress
                  </h2>
                  <div className="learning-section">
                    <h3 className="learning-title">
                      Challenges Completed Today:
                    </h3>
                    <p className="note">
                      <a
                        href="https://leetcode.com/submissions/detail/1730003520/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Create Hello World Function</strong>
                      </a>
                    </p>
                    <p className="note">
                      <a
                        href="https://leetcode.com/submissions/detail/1730020725/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Counter</strong>
                      </a>
                    </p>
                    <p className="note">
                      <a
                        href="https://leetcode.com/submissions/detail/1730052001/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Counter II</strong>
                      </a>
                    </p>{" "}
                    <p className="note">
                      <a
                        href="hhttps://leetcode.com/submissions/detail/1730034907/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>To Be Or Not To Be</strong>
                      </a>
                    </p>{" "}
                    <p className="note">
                      <a
                        href="https://leetcode.com/submissions/detail/1730166283/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>
                          Apply Transform Over Each Element in Array
                        </strong>
                      </a>
                    </p>{" "}
                    <p className="note">
                      <a
                        href="https://leetcode.com/submissions/detail/1730176362/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Filter Elements from Array</strong>
                      </a>
                    </p>{" "}
                    <p className="note">
                      <a
                        href="https://leetcode.com/submissions/detail/1730197037/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Array Reduce Transformation</strong>
                      </a>
                    </p>
                  </div>

                  <div className="reflection-section">
                    <h3 className="learning-title">
                      Reflection on the Challenge:
                    </h3>
                    <p className="note">
                      They were all easy, but useful. When you spend most of
                      your time just coding apps, it's surprisingly easy to
                      neglect <em>pure</em> problem-solving. Practicing it
                      sharpens my abstraction skills—and honestly, it's fun.
                      Sometimes frustrating, sure, but everything worth doing
                      has a bit of frustration baked in.
                    </p>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">Updates</h2>
                  <div className="learning-section">
                    <h3 className="learning-title">Small but meaningful:</h3>
                    <ul className="learning-list">
                      <li>Made some very small tweaks to my portfolio</li>
                      <li>
                        Edited this week's blog notes so you—yes, you—are
                        reading the latest, fresh-out-of-the-oven version
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="final-thoughts-section">
                  <h3 className="learning-title">Sunday Vibes Summary:</h3>
                  <p className="note">
                    Sometimes the best coding days aren't about building
                    features—they're about keeping the mind sharp and enjoying
                    the process. Plus, now I'm seven challenges deeper into
                    JavaScript fundamentals. Not a bad way to spend a Sunday!
                    ☕️ (or should I say 🍵)
                  </p>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
];

export default BlogEntry;
