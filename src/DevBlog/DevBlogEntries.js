import factory from "./DesignPatterns/Factory";
import { Builder } from "./DesignPatterns/Builder";
const template = [
  {
    id: "",
    title: "",
    mini_title: "",
    body: "",
    tags: [],
    publishedAt: "",
    glossary: [],
    references: [],
    subEntries: [],
    empty: true,
  },
];

const DevBlogEntry = [
  {
    id: "4",
    title: "Design patterns",
    mini_title: "DP",
    body: (
      <div>
        <h3>Writing in progress...</h3>
        <>
          <p>
            In this post, we'll take a quick tour of the programming patterns
            that developers swear by—handpicked from six trusted sources*.
            You'll see what makes each pattern shine, where it fits best, and
            why it's worth adding to your toolkit. To bring it all together,
            we'll wrap up with a hands-on JavaScript example that shows one of
            these patterns at work.
          </p>
          <div>
            <h3>Creational patterns</h3>
            <ol>
              <li>
                <h4>Factory Method</h4>
              </li>{" "}
              <li>
                <h4>Builder</h4>
              </li>{" "}
              <li>
                <h4>Singleton</h4>
              </li>
            </ol>
          </div>
          <div>
            <h3>Behavioral patterns</h3>
            <ol>
              <li>
                <h4>Strategy</h4>
              </li>
              <li>
                <h4>Observer</h4>
              </li>{" "}
              <li>
                <h4>State</h4>
              </li>{" "}
            </ol>
          </div>
          <div>
            <h3>Structural patterns</h3>
            <ol>
              <li>
                <h4>Adapter</h4>
              </li>
              <li>
                <h4>Facade</h4>
              </li>{" "}
              <li>
                <h4>Decorator</h4>
              </li>{" "}
            </ol>
          </div>
          <div>
            <p>Library</p>
            <ul>
              <li>
                <a
                  href="https://www.educative.io/blog/the-7-most-important-software-design-patterns
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-link"
                >
                  https://www.educative.io/blog/the-7-most-important-software-design-patterns
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=BJatgOiiht4

"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-link"
                >
                  https://www.youtube.com/watch?v=BJatgOiiht4
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://learningdaily.dev/the-7-most-important-software-design-patterns-d60e546afb0e

"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-link"
                >
                  https://learningdaily.dev/the-7-most-important-software-design-patterns-d60e546afb0e
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://dev.to/somadevtoo/top-10-design-patterns-for-programming-interviews-8j4

"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-link"
                >
                  https://dev.to/somadevtoo/top-10-design-patterns-for-programming-interviews-8j4
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://medium.com/@softwaretechsolution/design-pattern-81ef65829de2

"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-link"
                >
                  https://medium.com/@softwaretechsolution/design-pattern-81ef65829de2
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://swimm.io/learn/system-design/the-top-7-software-design-patterns-you-should-know-about

"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="playlist-link"
                >
                  https://swimm.io/learn/system-design/the-top-7-software-design-patterns-you-should-know-about
                </a>
              </li>
            </ul>
          </div>
        </>
      </div>
    ),
    tags: [],
    publishedAt: "",
    glossary: [],
    references: [],
    subEntries: [{ title: "Factory", body: factory }, {title: 'Builder', body: Builder}],
    empty: false,
  },
  {
    id: "1",
    title: "The Terminator",
    mini_title: "A-Z",

    body: (
      <div>
        <h3>Writing in progress...</h3>
      </div>
    ),
    tags: [],
    publishedAt: "",
    glossary: [],
    references: [],
    subEntries: [],
    empty: true,
  },
  {
    id: "2",
    title: "JS basics",
    mini_title: "JS",

    body: (
      <div>
        <h3>Writing in progress...</h3>
      </div>
    ),
    tags: [],
    publishedAt: "",
    glossary: [],
    references: [],
    subEntries: [],
    empty: true,
  },
  {
    id: "3",
    title: "OOP basics",
    mini_title: "OOP",

    body: (
      <div>
        <h3>Writing in progress...</h3>
      </div>
    ),
    tags: [],
    publishedAt: "",
    glossary: [],
    references: [],
    subEntries: [],
    empty: true,
  },
];

export default DevBlogEntry;
