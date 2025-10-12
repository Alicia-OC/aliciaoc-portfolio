import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  tomorrowNight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

let codeString = `//PRODUCT
class Slayer {
  constructor(name, missionsFinished, rank) {
    this.name = name;
    this.missionsFinished = missionsFinished || [];
    this.rank = rank;
  }
  getSlayer() {
    return {
      name: this.name,
      missionsFinished: this.missionsFinished,
      rank: this.rank,
    };
  }
  getMissions() {
    return this.missionsFinished;
  }
  getMissionCount() {
    return this.missionsFinished.length;
  }
  addMission(mission) {
    this.missionsFinished.push(mission);
  }
  getRank() {
    return this.rank;
  }
}

// CONCRETE PRODUCTS (Specific Rank Types)

class Mizunoto extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Mizunoto");
  }
}
class Mizunoe extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Mizunoe");
  }
}
class Kanoto extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Kanoto");
  }
}
class Kanoe extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Kanoe");
  }
}
class Kinoe extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Kinoe");
  }
}

// CREATOR

class SlayerCreator {
  addSlayer(name, missionsFinished = []) {
    // Default to empty array
    throw new Error("Factory method must be implemented by subclass");
  }

  addSlayer(name, missionsFinished) {
    const slayer = this.createSlayer(name, missionsFinished);
    this.logCreation(slayer);
    return slayer;
  }
  logCreation(slayer) {
    console.log(Slayer created with rank:, slayer.getRank());
  }
}

// CONCRETE CREATORS (One for each rank type)

class MizunotoCreator extends SlayerCreator {
  createSlayer(name, missionsFinished) {
    console.log("MizunotoCreator: Creating Mizunoto slayer...");
    return new Mizunoto(name, missionsFinished);
  }
}

class MizunoeCreator extends SlayerCreator {
  createSlayer(name, missionsFinished) {
    console.log("MizunoeCreator: Creating Mizunoe slayer...");
    return new Mizunoe(name, missionsFinished);
  }
}
class KanotoCreator extends SlayerCreator {
  createSlayer(name, missionsFinished) {
    console.log("KanotoCreator: Creating Kanoto slayer...");
    return new Kanoto(name, missionsFinished);
  }
}
class KanoeCreator extends SlayerCreator {
  createSlayer(name, missionsFinished) {
    console.log("KanoeCreator: Creating Kanoe slayer...");
    return new Kanoe(name, missionsFinished);
  }
}
class KinoeCreator extends SlayerCreator {
  createSlayer(name, missionsFinished) {
    console.log("KinoeCreator: Creating Kinoe slayer...");
    return new Kinoe(name, missionsFinished);
  }
}

// CREATOR FACTORY
class CreatorFactory {
  static getCreator(rank) {
    switch (rank.toLowerCase()) {
      case "mizunoto":
        return new MizunotoCreator();
      case "mizunoe":
        return new MizunoeCreator();
      case "kanoto":
        return new KanotoCreator();
      case "kanoe":
        return new KanoeCreator();
      case "kinoe":
        return new KinoeCreator();
      default:
        throw new Error(Unknown rank);
    }
  }
}

// ============================================
// USAGE EXAMPLES
// ============================================

// Example 1: Create with mission array

const creator = CreatorFactory.getCreator("Mizunoto");

const slayer = creator.addSlayer("Tanjiro", [
  "Defeat Hand Demon",
  "Protect the Train",
  "Fight Lower Moon Five",
]);

console.log(slayer.getSlayer());

//{ missionsFinished: ["Defeat Hand Demon", "Protect the Train", "Fight Lower Moon Five"], name: "Tanjiro", rank: "Mizunoto"}

// Example 2: Create without missions (empty array)

const creator2 = CreatorFactory.getCreator("mizunoe");
const slayer2 = creator2.addSlayer("Zenitsu");

// Add missions later
slayer2.addMission("Thunder Breathing Training");
slayer2.addMission("Defeat Spider Demon");

console.log(slayer2.getMissions());
// ['Thunder Breathing Training', 'Defeat Spider Demon']

// Example 3: Array of mission objects
const creator3 = CreatorFactory.getCreator("kanoto");
const slayer3 = creator3.addSlayer("Inosuke", [
  { name: "Mountain Training", completed: true, date: "2024-01-15" },
  { name: "Drum House", completed: true, date: "2024-02-20" },
  { name: "Spider Forest", completed: false, date: null }
]);
`;

const factory = (
  <div>
    <h1>Factory Method Pattern</h1>
    <div class="section">
      <p>
        Allows you to create objects without using <code>new</code> directly.
        Instead of instantiating classes yourself (for example,{" "}
        <code>const car = new Coffee()</code>), you call a special method—called
        a <strong>factory method</strong>—that decides what kind of object to
        create and returns it.
      </p>
      <p>
        This pattern is useful when you have several types of related objects
        and you don’t want your code to depend on the specific class names. The
        factory method handles the object creation logic, so if you ever need to
        change how or which objects are created, you can do it in one place
        without modifying the rest of your code.
      </p>
    </div>
    <div class="section">
      <h3>The 4 Roles</h3>
      <p>Who creates</p>
      <ul>
        <li>
          <strong>Creator:</strong> Defines the factory method but doesn’t
          implement it.
        </li>
        <li>
          <strong>Concrete Creator:</strong> Implements the factory method to
          create specific products.
        </li>
      </ul>

      <p>What gets created</p>
      <ul>
        <li>
          <strong>Product:</strong> The object the factory creates.
        </li>
        <li>
          <strong>Concrete Product:</strong> The actual class that gets
          instantiated.
        </li>
      </ul>
    </div>
    <div class="section">
      <h3>JavaScript Use Case</h3>

      <SyntaxHighlighter
        language="javascript"
        style={docco}
        showLineNumbers
        wrapLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
    <div class="section">
      <h3>Why Use It?</h3>
      <p>Benefits:</p>
      <ol>
        <li>Simpler code - You don't need to remember class names</li>
        <li>
          One place to change - If you add new types, you only update the
          factory
        </li>
        <li>
          Flexibility - Easy to add new types without changing existing code
        </li>
        <li>
          Hide complexity - Users don't need to know how objects are created
        </li>
      </ol>
    </div>
    <div class="section">
      <h3>When to Use It?</h3>
      <ul>
        <li>
          When you have multiple similar objects (users, products, vehicles,
          etc.)
        </li>
        <li>When you want to create different types based on input</li>
        <li>
          When object creation is complex and you want to hide that complexity
        </li>
      </ul>
    </div>
    <div class="section">
      <h3>Think of It As</h3>
      <p>
        <strong>Factory = Vending machine</strong>
      </p>
      <ul>
        <li>You press a button (give a parameter)</li>
        <li>Machine decides what to give you</li>
        <li>You get your product without knowing how it was made</li>
      </ul>

      <p>
        <strong>That's the Factory Method!</strong>
      </p>
    </div>
  </div>
);

export default factory;
