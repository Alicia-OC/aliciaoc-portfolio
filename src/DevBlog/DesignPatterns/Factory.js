import SyntaxHighlighter from "react-syntax-highlighter";
import {
  docco,
  tomorrowNight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

let codeString_diff_behavior = `//PRODUCT
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
    this.staminaRecoveryRate = 5; // Lowest rank, slow recovery
  }

  performSpecialAbility() {
    console.log(\`\${this.name} uses Basic Breathing Technique!\`\);
    this.stamina = Math.min(100, this.stamina + this.staminaRecoveryRate);
    return { damage: 10, staminaCost: 15 };
  }

  getMaxMissionsPerDay() {
    return 1; // Beginners can only handle 1 mission per day
  }

  requiresMentor() {
    return true; // Lowest rank needs supervision
  }
}

class Mizunoe extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Mizunoe");
    this.staminaRecoveryRate = 8;
  }

  performSpecialAbility() {
    console.log(\`\${this.name} uses Improved Breathing Form!\`\);
    this.stamina = Math.min(100, this.stamina + this.staminaRecoveryRate);
    return { damage: 20, staminaCost: 20 };
  }

  getMaxMissionsPerDay() {
    return 2;
  }

  canTeachBasics() {
    return true; // Can mentor Mizunoto slayers
  }
}

class Kanoto extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Kanoto");
    this.staminaRecoveryRate = 12;
    this.criticalHitChance = 0.15; // 15% crit chance
  }

  performSpecialAbility() {
    const isCrit = Math.random() < this.criticalHitChance;
    const baseDamage = 35;
    const damage = isCrit ? baseDamage * 2 : baseDamage;
    
    console.log(\`\${this.name} uses Advanced Form \${isCrit ? 'CRITICAL HIT!' : ''}!\`\);
    this.stamina = Math.min(100, this.stamina + this.staminaRecoveryRate);
    
    return { damage, staminaCost: 25, isCritical: isCrit };
  }

  getMaxMissionsPerDay() {
    return 3;
  }

  canLeadSquad() {
    return true; // Mid-rank can lead small teams
  }
}

class Kanoe extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Kanoe");
    this.staminaRecoveryRate = 15;
    this.comboCounter = 0;
  }

  performSpecialAbility() {
    this.comboCounter++;
    const comboMultiplier = 1 + (this.comboCounter * 0.2); // Each combo adds 20%
    const damage = 50 * comboMultiplier;
    
    console.log(\`\${this.name} uses Combo Attack! (\${this.comboCounter}x multiplier)\`\);
    this.stamina = Math.min(100, this.stamina + this.staminaRecoveryRate);
    
    return { damage, staminaCost: 30, comboCount: this.comboCounter };
  }

  resetCombo() {
    this.comboCounter = 0;
  }

  getMaxMissionsPerDay() {
    return 4;
  }

  canSoloLowerMoons() {
    return true; // Strong enough for lower-ranked demons alone
  }
}

class Kinoe extends Slayer {
  constructor(name, missionsFinished) {
    super(name, missionsFinished, "Kinoe");
    this.staminaRecoveryRate = 20;
    this.ultimateCharges = 3; // Can use ultimate ability 3 times
  }

  performSpecialAbility() {
    console.log(\`\${this.name} uses Master-Level Technique!\`\);
    this.stamina = Math.min(100, this.stamina + this.staminaRecoveryRate);
    return { damage: 75, staminaCost: 35 };
  }

  useUltimate() {
    if (this.ultimateCharges <= 0) {
      console.log(\`\${this.name} has no ultimate charges left!\`\);
      return { damage: 0, success: false };
    }
    
    this.ultimateCharges--;
    console.log(\`\${this.name} unleashes FINAL FORM! (\${this.ultimateCharges} charges remaining)\`\);
    return { damage: 200, staminaCost: 50, success: true };
  }

  getMaxMissionsPerDay() {
    return 6; // Elite rank can handle many missions
  }

  canFaceUpperMoons() {
    return true; // Highest rank, can face the strongest demons
  }

  trainSlayers(slayers) {
    console.log(\`\${this.name} is training \${slayers.length} slayers\`\);
    return slayers.map(s => {
      s.stamina = 100;
      return s;
    });
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

const creator1 = CreatorFactory.getCreator("mizunoto");
const tanjiro = creator1.addSlayer("Tanjiro", ["Defeat Hand Demon"]);

console.log(tanjiro.performSpecialAbility()); // { damage: 10, staminaCost: 15 }
console.log(\`Max missions: \${tanjiro.getMaxMissionsPerDay()}\`); // 1
console.log(\`Needs mentor: \${tanjiro.requiresMentor()}\`); // true

// Example 2: Kanoto (mid-rank with crits)
const creator2 = CreatorFactory.getCreator("kanoto");
const inosuke = creator2.addSlayer("Inosuke", []);

console.log(inosuke.performSpecialAbility()); // Might crit!
console.log(\`Can lead squad: \${inosuke.canLeadSquad()}\`); // true

// Example 3: Kinoe (elite with ultimate)
const creator3 = CreatorFactory.getCreator("kinoe");
const giyu = creator3.addSlayer("Giyu", ["Defeat Lower Moon Five"]);

console.log(giyu.performSpecialAbility()); // { damage: 75, staminaCost: 35 }
console.log(giyu.useUltimate()); // { damage: 200, staminaCost: 50, success: true }
console.log(\`Can face Upper Moons: \${giyu.canFaceUpperMoons()}\`); // true

// Example 4: Kanoe (combo system)
const creator4 = CreatorFactory.getCreator("kanoe");
const zenitsu = creator4.addSlayer("Zenitsu", []);

console.log(zenitsu.performSpecialAbility()); // 1x combo
console.log(zenitsu.performSpecialAbility()); // 2x combo
console.log(zenitsu.performSpecialAbility()); // 3x combo
zenitsu.resetCombo();
`;

let codeString_same_behavior = `// PRODUCT
class Slayer {
  constructor(name, missionsFinished = [], rank) {
    this.name = name;
    this.missionsFinished = missionsFinished;
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

// FACTORY (simplified - no need for multiple creator classes)
class SlayerFactory {
  static validRanks = ["Mizunoto", "Mizunoe", "Kanoto", "Kanoe", "Kinoe"];

  static createSlayer(rank, name, missionsFinished = []) {
    const normalizedRank = rank.charAt(0).toUpperCase() + rank.slice(1).toLowerCase();
    
    if (!this.validRanks.includes(normalizedRank)) {
      throw new Error(\`Unknown rank: \${rank}\`);
    }

    console.log(\`Creating \${normalizedRank} slayer...\`);
    const slayer = new Slayer(name, missionsFinished, normalizedRank);
    console.log(\`Slayer created with rank: \${slayer.getRank()}\`);
    
    return slayer;
  }
}

// ============================================
// USAGE EXAMPLES (cleaner API)
// ============================================

// Example 1: Create with mission array
const slayer = SlayerFactory.createSlayer("Mizunoto", "Tanjiro", [
  "Defeat Hand Demon",
  "Protect the Train",
  "Fight Lower Moon Five",
]);

console.log(slayer.getSlayer());

// Example 2: Create without missions
const slayer2 = SlayerFactory.createSlayer("mizunoe", "Zenitsu");
slayer2.addMission("Thunder Breathing Training");
slayer2.addMission("Defeat Spider Demon");

console.log(slayer2.getMissions());

// Example 3: Array of mission objects
const slayer3 = SlayerFactory.createSlayer("kanoto", "Inosuke", [
  { name: "Mountain Training", completed: true, date: "2024-01-15" },
  { name: "Drum House", completed: true, date: "2024-02-20" },
  { name: "Spider Forest", completed: false, date: null }
]);`

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
      <h3>JavaScript Use Case - Concrete products have different behaviors</h3>
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        showLineNumbers
        wrapLines={true}
      >
        {codeString_diff_behavior}
      </SyntaxHighlighter>
    </div>

        <div class="section">
      <h3>JavaScript Use Case - Concrete products don't have different behaviors</h3>
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        showLineNumbers
        wrapLines={true}
      >
        {codeString_same_behavior}
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
