const happy = "😄";
const exhausted = "😵";
const whatAMess = <i className="bi bi-emoji-smile-upside-down"></i>;
const sad = <i className="bi bi-emoji-smile-upside-down"></i>;

const emojis = {
  grinning: "😀",
  smileBig: "😃",
  smileWide: "😄",
  beaming: "😁",
  sweatSmile: "😅",
  tearsOfJoy: "🥲",
  pleadingEyes: "🥹",
  smile: "😊",
  slightSmile: "🙂",
  upsideDown: "🙃",
  yum: "😋",
  tongue: "😛",
  squintTongue: "😝",
  crazy: "🤪",
  skeptical: "🤨",
  monocle: "🧐",
  nerd: "🤓",
  party: "🥳",
  smirk: "😏",
  unamused: "😒",
  disappointed: "😞",
  pensive: "😔",
  worried: "😟",
  confused: "😕",
  frown: "🙁",
  persevere: "😣",
  confounded: "😖",
  weary: "😩",
  pleading: "🥺",
  sob: "😭",
  scream: "😱",
  anxious: "😰",
  sweat: "😓",
  hugging: "🤗",
  thinking: "🤔",
  neutral: "😐",
  melting: "🫠",
  eyeRoll: "🙄",
  yawn: "🥱",
  sleeping: "😴",
  sleepy: "😪",
  dizzy: "😵",
  spiralEyes: "😵‍💫",
  dottedLine: "🫥",
  woozy: "🥴",
  sneeze: "🤧",
};

const moodBefore = { 1: "😄", 2: exhausted, 3: whatAMess };
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
                      href="https://leetcode.com/submissions/detail/1727154737/"
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
            moodBefore: emojis.smileWide,
            moodAfter: emojis.beaming,
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
          {
            date: "August 11th",
            moodBefore: emojis.smileWide,
            moodAfter: emojis.beaming,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="mood-section">
                  <h3 className="learning-title">Mood of the Day:</h3>
                  <p className="note">
                    Warrior mode mixed with "Why won't this input behave?!"
                    frustration. Ended the day early but victorious - sometimes
                    Netflix and Breaking Bad with a cat is exactly the debugging
                    your brain needs.
                  </p>
                </div>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hits:</div>
                  <div className="playlist-links">
                    <li>
                      <a
                        href="https://music.youtube.com/watch?v=PPA0tHt3m5Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        https://music.youtube.com/watch?v=PPA0tHt3m5Y
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://music.youtube.com/watch?v=peLRPSCeppI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        https://music.youtube.com/watch?v=peLRPSCeppI
                      </a>
                    </li>
                  </div>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenges of the Day:
                  </h3>
                  <div className="leetcode-links">
                    <div className="leetcode-link">
                      <a
                        href="https://leetcode.com/submissions/detail/1731540452/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Function Composition</strong>
                      </a>
                      <span className="difficulty">1/10</span>
                    </div>
                    <div className="leetcode-link">
                      <a
                        href="https://leetcode.com/submissions/detail/1731543086/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Return Length of Arguments Passed</strong>
                      </a>
                      <span className="difficulty">0/10</span>
                    </div>
                    <div className="leetcode-link">
                      <a
                        href="https://leetcode.com/submissions/detail/1731584179/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Allow One Function Call</strong>
                      </a>
                      <span className="difficulty">3/10</span>
                    </div>
                  </div>
                </div>

                <div className="documentation-section">
                  <strong>Documentation followed:</strong>
                  <div className="doc-links">
                    <ul>
                      <li>
                        <a
                          href="https://jestjs.io/docs/expect#tobedefinedobject"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Jest Testing - Array.isArray() checks
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          React Controlled Input Components
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub - Linking Pull Requests to Issues
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. Boss Fight: The Monthcard Test Loop
                  </h2>

                  <div className="struggle-level">Struggle: 4/10</div>
                  <p className="note">
                    My test file for <strong>Monthcard</strong> decided to throw
                    a tantrum while looping through category items.{" "}
                    <strong>Strategy:</strong> Give it a .filter before mapping
                    so it doesn't choke on empty data. Victory achieved.
                  </p>

                  <div className="code-block">
                    <br /> .filter(
                    <pre>
                      {" "}
                      &nbsp;&nbsp;(category) ={">"} category &&
                      Array.isArray(category.items)
                      <br />)
                    </pre>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">2. Test Garden Maintenance</h2>

                  <div className="struggle-level">Struggle: 2/10</div>

                  <div className="learning-section">
                    <p className="note">
                      Some tests had been sitting in the corner gathering dust.
                      Cleaned them up, watered them, and even planted a new one:
                      a test to make sure the <strong>Home</strong>
                      button spawns a new card via API call. 🌱
                    </p>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    3. The Bug That Lived in My Input
                  </h2>

                  <div className="struggle-level">Struggle: 6/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">The Discovery:</h3>
                    <p className="note">
                      Story time: I'd add a new item, clear the state, yet… the
                      input <strong>refused</strong> to empty, which also bugged
                      the possibility of adding a replica of the same item. So
                      if I was to add x1 coffe 2.5€ and add the exact same item,
                      I wouldn't be able to do so because the input hadn't been
                      cleared. Turns out, I never told the &lt;input&gt; who was
                      in charge. <strong>Fix: </strong>{" "}
                      <pre> Adding 'value={"newItems"}' to the input</pre> And
                      order was restored to the kingdom.
                    </p>
                    <p className="note">
                      I also learnt how to close an issue when merging a pull
                      request!
                    </p>
                  </div>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Summary:</h2>
                  <div className="struggle-level">Overall Struggle: 4/10</div>
                  <p className="note">
                    ⏱ <strong>Total Dev Time:</strong> 2h 40m
                    <br />
                    Ended early at 9:30 pm — wasn't feeling 100%, so I traded
                    the keyboard for Netflix (Breaking Bad) & chill (cat and
                    AC).
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 12th",
            moodBefore: emojis.monocle,
            moodAfter: emojis.smileWide,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="mood-section">
                  <h3 className="learning-title">Summary:</h3>
                  <p className="note">
                    🧠 That "aha!" moment when you discover something you didn't
                    know existed, mixed with the slight embarrassment of finding
                    duplicate code you wrote yourself. Classic developer day -
                    learning and cleaning up your own mess!
                  </p>
                </div>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hit:</div>
                  <a
                    href="https://music.youtube.com/watch?v=AeedWEyMYYo&list=RDCLAK5uy_nmS3YoxSwVVQk9lEQJ0UX4ZCjXsW_psU8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=AeedWEyMYYo&list=RDCLAK5uy_nmS3YoxSwVVQk9lEQJ0UX4ZCjXsW_psU8
                  </a>
                </div>
                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1732413749/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      {" "}
                      <strong>Memoize</strong>
                    </a>{" "}
                  </p>
                </div>
                <div className="documentation-section">
                  <strong>Documentation followed:</strong>
                  <div className="doc-links">
                    <ul>
                      <li>
                        <a
                          href="https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Understanding Memoize in JavaScript - FreeCodeCamp
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="diary-section">
                  <h3 className="learning-title">Today's Discovery:</h3>
                  <p className="note">
                    Super useful article about memoization! I had heard about
                    Lodash and everything mentioned in the article made sense to
                    me. I didn't struggle to understand the concept but I didn't
                    know memoization was a thing!
                  </p>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    1. Duplicate Controller Gremlin
                  </h2>

                  <div className="struggle-level">Struggle: 3/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">The Discovery:</h3>
                    <p className="note">
                      I realized I had written <strong>two</strong> controllers
                      that did the same thing. The <code>userControllers</code>{" "}
                      file already had logic to fetch all the users' cards.
                      Lesson learned: planning {">"} panic coding.
                    </p>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    2. Default Items Consistency
                  </h2>

                  <div className="struggle-level">Struggle: 5/10</div>

                  <div className="learning-section">
                    <h3 className="learning-title">The Fix:</h3>
                    <p className="note">
                      While adding default items via frontend, saw
                      inconsistency: items were structured differently in{" "}
                      <code>monthCard</code> vs. <code>defaultItems</code> in
                      users. Reworked to align both structures for consistency.
                    </p>
                  </div>
                </div>

                <div className="final-thoughts-section">
                  <h3 className="learning-title">Final Thought:</h3>
                  <p className="note">
                    Short but productive session. Sometimes the best days are
                    when you clean up technical debt and learn something
                    completely new. Memoization just opened up a whole new world
                    of optimization possibilities!
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 13th",
            moodBefore: emojis.smile,
            moodAfter: emojis.slightSmile,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="mood-section">
                  <h3 className="learning-title">Mood of the Day:</h3>
                  <p className="note">
                    🎵 Chill evening vibes with some promise-wrestling on the
                    side. Started late but kept it light - sometimes the best
                    sessions are the ones where you fix the little things that
                    have been bugging you.
                  </p>
                </div>

                <div className="playlist-section">
                  <div className="playlist-label">Today's playlist/hits:</div>
                  <div className="playlist-links">
                    <ul>
                      <li>
                        <a
                          href="https://music.youtube.com/watch?v=sgj04v5sDm4&list=RDCLAK5uy_khs3a0YMI9WYs2k1Oqb2ukWX3dA3-lnwI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=sgj04v5sDm4&list=RDCLAK5uy_khs3a0YMI9WYs2k1Oqb2ukWX3dA3-lnwI
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://music.youtube.com/watch?v=IWdLFZfMIYg&list=RDCLAK5uy_khs3a0YMI9WYs2k1Oqb2ukWX3dA3-lnwI"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="playlist-link"
                        >
                          https://music.youtube.com/watch?v=IWdLFZfMIYg&list=RDCLAK5uy_khs3a0YMI9WYs2k1Oqb2ukWX3dA3-lnwI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenges of the Day:
                  </h3>
                  <div className="leetcode-links">
                    <div className="leetcode-link">
                      <a
                        href="https://leetcode.com/submissions/detail/1734033654/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Add Two Promises</strong>
                      </a>
                      <span className="difficulty">7/10</span>
                    </div>
                    <div className="leetcode-link">
                      <a
                        href="https://leetcode.com/submissions/detail/1734046149/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Sleep</strong>
                      </a>
                      <span className="difficulty">
                        5/10 - Easy once I resolved the previous one, haven't
                        seen much about promises.
                      </span>
                    </div>
                    <div className="leetcode-link">
                      <a
                        href="https://leetcode.com/submissions/detail/1734111660/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Timeout Cancellation</strong>
                      </a>
                      <span className="difficulty">10/10</span>
                    </div>
                    <div className="leetcode-link">
                      <a
                        href="https://leetcode.com/submissions/detail/1734124141/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        <strong>Is Object Empty</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="documentation-section">
                  <strong>Documentation followed:</strong>
                  <div className="doc-links">
                    <ul>
                      <li>
                        <a
                          href="https://medium.com/insiderengineering/mastering-javascript-promises-from-basics-to-advanced-f24669381c56"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mastering JavaScript Promises: From Basics to Advanced
                          - Medium
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">1. CSS Layout Adjustments</h2>

                  <div className="struggle-level">Struggle: 2/10</div>

                  <div className="learning-section">
                    <p className="note">
                      Fixed a couple of bugs, but most of the time went into CSS
                      — the profile and edit card sections were way too narrow,
                      so I finally adjusted them. Sometimes it's the small UI
                      improvements that make the biggest difference!
                    </p>
                  </div>
                </div>

                <div className="diary-section">
                  <h3 className="learning-title">Today's Session Notes:</h3>
                  <p className="note">
                    Started coding at 8:25pm. Light session overall. The promise
                    challenges were a good warm-up, especially since I haven't
                    worked much with promises before. That timeout cancellation
                    one really tested me! 💪
                  </p>
                </div>

                <div className="final-thoughts-section">
                  <h3 className="learning-title">Final Thought:</h3>
                  <p className="note">
                    Sometimes the best coding sessions are the chill ones where
                    you tackle the little annoyances that have been piling up.
                    Clean UI, working promises, and good music - what more could
                    you ask for?
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 15th",
            moodBefore: emojis.frown,
            moodAfter: emojis.smileWide,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Mood-lifting playlist:</div>
                  <a
                    href="https://music.youtube.com/playlist?list=RDCLAK5uy_mfdqvCAl8wodlx2P2_Ai2gNkiRDAufkkI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/playlist?list=RDCLAK5uy_mfdqvCAl8wodlx2P2_Ai2gNkiRDAufkkI
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenges of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1736279309/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Array Prototype Last</strong>
                    </a>{" "}
                    - 4/10 difficulty
                  </p>
                  <div className="code-block">
                    <pre>{`Array.prototype.last = function () {
    return this.length ? this[this.length - 1] : -1
};`}</pre>
                  </div>

                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1736309006/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Group By</strong>
                    </a>
                  </p>
                  <div className="code-block">
                    <pre>{`Array.prototype.groupBy = function (fn) {
    const result = {}
    for (let i = 0; i < this.length; i++) {
        let n = this[i]
        const key = fn(n);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(n)
    };
    return result
}`}</pre>
                  </div>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1736271572/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Chunk Array</strong>
                    </a>
                  </p>
                  <div className="code-block">
                    <pre>{`var chunk = function (arr, size) {
    let result = []
    let firstIndex = 0
    let lastIndex = size

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}`}</pre>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    August 15th: Job Hunt Reality Check
                  </h2>
                  <p className="note">
                    ☹ Feeling a bit discouraged today. Programming is fun, but
                    looking for an IT job… is not that fun. It's tough for
                    someone who doesn't have a CS degree or work experience,
                    even though I program almost every single day. I don't get
                    the same chances people who have a degree or experience
                    would get. Still, I just need to keep going and stop
                    overthinking this.
                  </p>
                  <p className="note">
                    I was this close to listening to sad music… but instead, I
                    forced myself into a happier playlist. Did it help?
                    Honestly, a little bit. Once I dove into programming, my
                    mood completely turned around. Coding isn't just something I
                    want to do for a career—it's actually something I enjoy
                    deeply.
                  </p>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Development Work:</h2>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      1. Junior Mistake of the Day
                    </h3>
                    <div className="struggle-level">
                      Struggle: logic 0/10 - time to realise what's going on
                      1000/10
                    </div>
                    <p className="note">
                      Spent nearly 30 minutes debugging a 404 on an API call.
                      Turned out my server was started with <strong>npm</strong>{" "}
                      instead of <strong>npx</strong>. I had been making changes
                      in the code, but the server didn't restart automatically
                      so the routing changes didn't affect the running server 😅
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      2. UserProfile Refactoring
                    </h3>
                    <div className="struggle-level">Struggle: 4/10</div>
                    <ul className="learning-list">
                      <li>
                        Refactored userProfile by creating a separate component
                        for defaultItems—it was getting messy
                      </li>
                      <li>
                        Hooked up backend + frontend so default items can now be
                        updated by users
                      </li>
                    </ul>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      3. Filter Per Month/Year Feature
                    </h3>
                    <div className="struggle-level">Struggle: 8/10</div>
                    <p className="note">
                      <strong>New branch:</strong> add filter per month/year
                      (step 4 in the roadmap). I almost lost my mind — the card
                      documents have a year key that looks fine at first glance,
                      but retrieving the data returned undefined in both backend
                      and frontend.
                    </p>

                    <div className="bug-section">
                      <h4 className="learning-title">The Problem:</h4>
                      <div className="code-block">
                        <pre>{`const user = await User.findById(userid).populate({
    path: "cards",
    select: "id month **year** foodExpenses subscriptionExpenses transportExpenses otherExpenses",
});`}</pre>
                      </div>
                      <p className="note">
                        I had simply forgotten to include{" "}
                        <span className="component-highlight">year</span> in the
                        mongoose populate method 😅
                      </p>
                    </div>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      4. Ordering Cards by Year and Month
                    </h3>
                    <div className="struggle-level">Struggle: 5/10</div>
                    <p className="note">
                      Added logic to sort them, but I'm still unsure where it
                      should go. For now, it's in the "get all cards"
                      controller, but maybe it makes more sense to put it in the
                      "new card" controller so the sorting happens whenever a
                      new card is added.
                    </p>
                  </div>
                  <div className="topic-section">
                    <h3 className="learning-title">
                      5. Backend Helpers Implementation
                    </h3>
                    <div className="struggle-level">Struggle: 3/10</div>
                    <p className="note">
                      Really cool session! I started creating helpers in the
                      backend as the app grows. Made one for expenses
                      calculations since that logic will be used in three
                      different controllers.
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">6. UI Improvements</h3>
                    <div className="struggle-level">Struggle: 2/10</div>
                    <p className="note">
                      Tweaked the summary widget — it's looking nice now.
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      7. Pull Requests Revelation
                    </h3>
                    <div className="struggle-level">Struggle: 1/10</div>
                    <p className="note">
                      Just realized I've been using pull requests wrong all
                      along lol. Now I know they're really only meant for when a
                      branch's purpose is complete 😅
                    </p>
                  </div>
                </div>

                <div className="learning-section">
                  <h3 className="learning-title">
                    Unexpected thing I learned today:
                  </h3>
                  <p className="note">
                    <em>
                      The Promise constructor takes (resolve, reject) as
                      parameters. Since we only need reject and never use
                      resolve, we can use _ as a convention to indicate "unused
                      parameter"
                    </em>
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 16th",
            moodBefore: emojis.smileWide,
            moodAfter: emojis.slightSmile,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker & GitHub
                  battles
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Mood-lifting playlist:</div>
                  <a
                    href="https://music.youtube.com/watch?v=eZCWyFNV_ZM&list=LM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=eZCWyFNV_ZM&list=LM
                  </a>
                </div>
                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>

                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1738559007/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Array Wrapper</strong>
                    </a>
                    <p className="note">
                      I almost never use{" "}
                      <span className="component-highlight">Classes</span> in my
                      own projects, so solving this problem on LeetCode was both
                      refreshing and a great way to learn. Problem-solving
                      really pushes me out of my usual coding habits—and I'm
                      picking up a lot! 😊
                    </p>
                  </p>
                </div>

                <div className="struggle-section">
                  <div className="topic-section">
                    <h3 className="learning-title">
                      1. User Profile Enhancement
                    </h3>
                    <div className="struggle-level">Struggle: 3/10</div>
                    <p className="note">
                      I added a{" "}
                      <strong>new rendered section in the user profile</strong>{" "}
                      so users can see their default items right away—no need to
                      dive into the editing section anymore.
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      2. The Great GitHub Battle Continues
                    </h3>
                    <p className="note">
                      Still battling with GitHub 😅. My contribution grid isn't
                      updating, and at first I realized the issue was that I had
                      different users set up: one on my local repo and another
                      owning the online repo. I fixed that, but for some reason
                      the grid still won't update.
                    </p>
                    <p className="note">
                      <strong>The fight continues!</strong>
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      3. Sunday Blog Update Routine
                    </h3>
                    <p className="note">
                      As usual, Sundays are my blog update days, when I gather
                      all the week's entries. I did skip{" "}
                      <strong>August 14th</strong>, though—I had some medical
                      appointments and got home really late.
                    </p>
                    <p className="note">
                      Nothing serious, just routine physical therapy for my
                      almost-healed fracture! 💪✨
                    </p>
                  </div>
                </div>

                <div className="victory-section">
                  <h3 className="learning-title">Reflection:</h3>
                  <p className="note">
                    LeetCode continues to be a great teacher, pushing me into
                    coding patterns I don't normally use. Each challenge is like
                    a mini-adventure in problem-solving!
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 18th",
            moodBefore: emojis.smileWide,
            moodAfter: emojis.party,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Mood-lifting playlist:</div>
                  <a
                    href="https://music.youtube.com/watch?v=WjqoqTFoqIA&list=LM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=WjqoqTFoqIA&list=LM
                  </a>
                  <br />
                  <a
                    href="https://music.youtube.com/watch?v=gZYtes1RO_w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=gZYtes1RO_w
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1739586455/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Calculator with Method Chaining</strong>
                    </a>{" "}
                    - 3/10 difficulty
                  </p>
                </div>

                <div className="topic-section">
                  <p className="note">
                    ☹ Started the day feeling a bit overwhelmed by some tricky
                    state management issues, but once I dove into the debugging
                    process, things started clicking into place. There's
                    something satisfying about untangling complex bugs! 😊
                  </p>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Development Work:</h2>

                  <div className="topic-section">
                    <h3 className="learning-title">1. Redux Bug Discovery</h3>
                    <div className="struggle-level">Struggle: 6/10</div>
                    <p className="note">
                      Found a sneaky bug: when users update their{" "}
                      <strong>default items</strong>, the changes don't show up
                      in their <strong>summary details</strong> unless they log
                      out and back in. Why? Because the summary relies on the
                      Redux state, not direct API calls, while the editing
                      window <em>does</em> call the API. Lesson learned: always
                      keep state and API updates in sync.
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      2. New Feature Shipped 🎉
                    </h3>
                    <div className="struggle-level">Struggle: 3/10</div>
                    <p className="note">
                      I wrapped up a feature where a card now gets created
                      automatically upon the user's first login of the month.
                      That makes the old "Create new" button kind of pointless.
                      My plan is to repurpose it so users can create a card for
                      any custom month/year they like.
                    </p>
                    <p className="note">
                      Also had a fun new idea 💡: letting users{" "}
                      <strong>name</strong> their cards. That way, the app won't
                      just be about monthly expenses—it could also track
                      specific budgets, like "Japan Trip 2025" or "Wedding
                      Budget."
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      3. The Currency Rabbit Hole 🌀
                    </h3>
                    <div className="struggle-level">Struggle: 8/10</div>
                    <p className="note">
                      Oh boy. I thought fixing the currency display bug would be
                      a quick win ("it's just one letter, right?"). Wrong. That
                      "one letter" is fetched from so many places in the app
                      that I started questioning my life choices.
                    </p>
                    <p className="note">
                      I debated whether to tie currencies to users or to cards.
                      My conclusion:
                    </p>
                    <ul className="learning-list">
                      <li>
                        <strong>Monthcards</strong> will hold the currency, so
                        we preserve what currency was in use when the card was
                        created.
                      </li>
                      <li>
                        <strong>User model</strong> will still have a currency
                        for consistency, especially for yearly summaries and
                        defaults.
                      </li>
                    </ul>

                    <div className="playlist-section">
                      <div className="playlist-label">Fight song:</div>
                      <a
                        href="https://music.youtube.com/watch?v=qp49k3xK1NE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="playlist-link"
                      >
                        https://music.youtube.com/watch?v=qp49k3xK1NE
                      </a>
                    </div>

                    <p className="note">
                      So, currencies will be accessed like this:
                    </p>
                    <ol className="learning-list">
                      <li>Editing card → card currency</li>
                      <li>Viewing card → card currency</li>
                      <li>Yearly summary → user's currency</li>
                      <li>Editing default items → user's currency</li>
                    </ol>
                    <p className="note">
                      Not the most glamorous update, but a necessary one to keep
                      things logical and future-proof.
                    </p>
                  </div>
                </div>
                <div className="learning-section">
                  <h3 className="learning-title">Note of the day:</h3>
                  <p className="note">
                    <em>
                      State management in Redux requires careful coordination
                      between API calls and state updates. When you update data
                      through an API, you also need to update the Redux store to
                      keep the UI in sync, or users will see stale data.
                    </em>
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 19th",
            moodBefore: emojis.smileWide,
            moodAfter: emojis.smileWide,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Redux State Updates & Event Emitter
                  Challenge
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Learning resource:</div>
                  <a
                    href="https://www.freecodecamp.org/news/how-to-use-classes-in-javascript-handbook/#heading-hold-on-a-second-are-we-saying-functions-are-bad-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    How to Use Classes in JavaScript - FreeCodeCamp
                  </a>
                </div>

                <div className="playlist-section">
                  <div className="playlist-label">Mood-lifting playlist:</div>
                  <a
                    href="https://music.youtube.com/watch?v=xZdK1OSlHME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=xZdK1OSlHME
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/accounts/login/?next=/submissions/detail/1740927460/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Event Emitter</strong>
                    </a>{" "}
                    - Very challenging for me
                  </p>
                  <div className="code-block">
                    <pre>{`class EventEmitter {
    constructor() {
        this.events = {}
    }
    subscribe(eventName, callback) {
        if (eventName === undefined) {
            return
        }
        if (this.events[eventName]) {
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = [callback]
        }
        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(callback)
                this.events[eventName].splice(index, 1)
                return undefined
            },
        }
    }
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return []
        }
 
        let result = []
        let methods = this.events[eventName]
 
        for (let i = 0; i < methods.length; i++) {
            result.push(methods[i](...args))
        }
 
        return result
    }
}`}</pre>
                  </div>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Development Work:</h2>

                  <div className="topic-section">
                    <h3 className="learning-title">
                      1. Tackling the Redux State Elephant 🐘
                    </h3>
                    <div className="struggle-level">Struggle: 3/10</div>
                    <p className="note">
                      Today I finally addressed one of the elephants in the
                      room: updating the user's Redux state whenever it gets
                      updated in the backend.
                    </p>
                    <p className="note">
                      Honestly? It took me way less time than I expected. I had
                      been avoiding it because the phrase "first time" makes
                      things sound scarier than they really are. But once I
                      jumped in, it wasn't nearly as complicated as I had built
                      it up in my head.
                    </p>
                    <p className="note">
                      Moral of the story: don't let "first times" intimidate
                      you. Just because it's new doesn't mean it has to be hard.
                      Sometimes, the monster under the bed turns out to be a
                      tiny bug. 🐛
                    </p>
                  </div>
                </div>

                <div className="learning-section">
                  <h3 className="learning-title">
                    Unexpected thing I learned today:
                  </h3>
                  <p className="note">
                    <em>
                      Event emitters are foundational to understanding how
                      JavaScript handles asynchronous events and callbacks. The
                      subscribe/unsubscribe pattern is everywhere in modern
                      frameworks, and implementing one from scratch really
                      clarifies how observer patterns work.
                    </em>
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 21st",
            moodBefore: emojis.melting,
            moodAfter: emojis.melting,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Learning about PRD & Problem Solving
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Learning resources:</div>
                  <a
                    href="https://www.aha.io/roadmapping/guide/release-management/what-is-user-story-mapping#:~:text=User%20story%20mapping%20is%20a%20visual%20exercise%20that%20helps%20product,team%20to%20better%20prioritize%20work."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    User Story Mapping Guide - Aha!
                  </a>
                  <br />
                  <a
                    href="https://zapier.com/blog/user-stories/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    User Stories Guide - Zapier
                  </a>
                  <br />
                  <a
                    href="https://carlinyuen.medium.com/writing-prds-and-product-requirements-2effdb9c6def"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    Writing PRDs and product requirements
                  </a>
                  <br />
                  <a
                    href="https://productschool.com/blog/product-strategy/product-template-requirements-document-prd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    The Only Product Requirements Document (PRD) Template You
                    Need
                  </a>
                  <br />
                  <a
                    href="https://rohandehal.notion.site/Best-Practice-PRD-Framework-Think-Different-Build-Better-6ca85e4631cf4b8db4f1c22649c5785e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    Best Practice PRD Framework: Think Different, Build Better
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/submissions/detail/1743644067/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>Power of Two</strong>
                    </a>
                  </p>
                  <div className="code-block">
                    <pre>{`var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
 
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n /= 2;
    }
 
    return true;
};`}</pre>
                  </div>
                </div>
                <p className="note">
                  Today was about reading and learning about PRD for an
                  assignment!
                </p>
              </div>
            ),
          },
          {
            date: "August 23rd",
            moodBefore: emojis.smile,
            moodAfter: emojis.smile,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Monthly Expenses Tracker
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Mood-lifting playlist:</div>
                  <a
                    href="https://music.youtube.com/watch?v=5G-EkBYXfWU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=5G-EkBYXfWU
                  </a>
                  <br />
                  <a
                    href="https://music.youtube.com/watch?v=C7erVqk1grk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=C7erVqk1grk
                  </a>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Development Work:</h2>
                  <p className="note">
                    After a tough week, today was all about having fun and
                    lifting my spirits through programming—taking it one day at
                    a time
                  </p>
                  <div className="topic-section">
                    <h3 className="learning-title">
                      1. DataByYear Synchronization Bug Fix
                    </h3>
                    <div className="struggle-level">Struggle: 6/10</div>

                    <h4 className="learning-title">Problem</h4>
                    <p className="note">
                      When users updated their card information, the dataByYear
                      property wasn't being properly synchronized between the
                      backend and frontend:
                    </p>
                    <ul className="learning-list">
                      <li>
                        <strong>Backend:</strong> Failed to update the user's
                        dataByYear property after card updates
                      </li>
                      <li>
                        <strong>Frontend:</strong> Redux state wasn't reflecting
                        the latest dataByYear value after updates
                      </li>
                    </ul>

                    <h4 className="learning-title">Solution</h4>
                    <ul className="learning-list">
                      <li>
                        Updated backend logic to properly refresh dataByYear
                        when card information is modified
                      </li>
                      <li>
                        Enhanced frontend Redux actions to sync the updated
                        dataByYear value with the application state
                      </li>
                    </ul>

                    <h4 className="learning-title">Testing</h4>
                    <ul className="learning-list">
                      <li>
                        Verified dataByYear updates correctly in database after
                        card modification
                      </li>
                      <li>
                        Confirmed Redux state reflects updated dataByYear value
                      </li>
                      <li>Tested user flow from card update to data display</li>
                    </ul>
                  </div>
                </div>

                <div className="learning-section">
                  <h3 className="learning-title">Note of the day:</h3>
                  <p className="note">
                    <em>
                      Synchronization between backend data and frontend state
                      requires careful attention to every update pathway. It's
                      not enough to fix the initial data flow - you need to
                      ensure that all subsequent modifications properly
                      propagate through the entire system.
                    </em>
                  </p>
                </div>
              </div>
            ),
          },
          {
            date: "August 24th",
            moodBefore: emojis.frown,
            moodAfter: emojis.smileWide,
            body: (
              <div className="blog-container">
                <h5 className="blog-scope">
                  Scope of this session: Landing Page Design & Workflow
                  Organization
                </h5>

                <div className="playlist-section">
                  <div className="playlist-label">Mood-lifting playlist:</div>
                  <a
                    href="https://music.youtube.com/watch?v=72CFsLWqjtI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    https://music.youtube.com/watch?v=72CFsLWqjtI
                  </a>
                </div>

                <div className="playlist-section">
                  <div className="playlist-label">Learning resource:</div>
                  <a
                    href="https://www.freecodecamp.org/news/javascript-debounce-example/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="playlist-link"
                  >
                    JavaScript Debounce Example - FreeCodeCamp
                  </a>
                </div>

                <div className="leetcode-section">
                  <h3 className="learning-title">
                    LeetCode Challenge of the Day:
                  </h3>
                  <p className="note">
                    <a
                      href="https://leetcode.com/problems/debounce?envType=study-plan-v2&envId=30-days-of-javascript"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playlist-link"
                    >
                      <strong>2627. Debounce</strong>
                    </a>
                  </p>
                  <div className="code-block">
                    <pre>{`var debounce = function (fn, t) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
            timer = null
        }, t);
    }
};`}</pre>
                  </div>
                </div>

                <div className="topic-section">
                  <h2 className="feature-title">
                    Creative Breakthroughs & Streak Reflections
                  </h2>
                  <p className="note">
                    It's been a really long week, and I didn't get as much
                    programming time as I'd hoped. The saddest part? I lost my
                    LeetCode streak. But sometimes taking a step back leads to
                    creative breakthroughs! 😊
                  </p>
                </div>

                <div className="struggle-section">
                  <h2 className="feature-title">Today's Development Work:</h2>

                  <div className="topic-section">
                    <h3 className="learning-title">1. Landing Page Progress</h3>
                    <p className="note">
                      Today I finally started working on the landing page
                      layout. I was feeling stuck creatively, so I grabbed my
                      iPad, moved to the sofa, and let my mind wander. It
                      worked—I ended up with a decent sketch and even spent
                      quite a while drawing a cute little image for the landing
                      page. Inspiration may have been scarce, but that tiny
                      spark was enough to get me going. There is still a lot of
                      work to do, but at leats the Landing page isn-t a plain
                      pink block anymore!
                    </p>
                  </div>

                  <div className="topic-section">
                    <h3 className="learning-title">2. New Branches Created</h3>
                    <p className="note">
                      I also organized my workflow a bit more by creating two
                      new branches:
                    </p>
                    <ul className="learning-list">
                      <li>
                        <strong>feature/css</strong> → for CSS-only sessions
                      </li>
                      <li>
                        <strong>bugfixes</strong> → for small bug fixes (mostly
                        typo-related)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="learning-section">
                  <h3 className="learning-title">
                    Unexpected thing I learned today:
                  </h3>
                  <p className="note">
                    <em>
                      Debouncing is a crucial technique for performance
                      optimization, especially in user interfaces. It prevents
                      expensive operations from running too frequently by
                      delaying execution until after a specified period of
                      inactivity. Perfect for search inputs, resize events, and
                      API calls.
                    </em>
                  </p>
                </div>
                <div className="final-thoughts-section">
                  <h2 className="feature-title">Final Thought</h2>
                  <p className="note">
                    It's been a really long week, and I didn't get as much
                    programming time as I'd hoped, although Monday was a
                    fantastic session! The saddest part? I lost my LeetCode
                    streak. My goal was to reach 365 days straight, but I guess
                    missing on day 26 is better than missing on day 200.
                  </p>
                  <p className="note">
                    26 days may not sound like much, but hey—it's a start. I'll
                    just pick myself up and begin again. 🚀
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
