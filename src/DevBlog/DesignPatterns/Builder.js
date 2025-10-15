import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

let codeString_basic_builder = `//PRODUCT
  class Onsen {
    constructor(name, buildings, yard, amenities) {
      this.name = name;
      this.buildings = buildings;
      this.yard = yard;
      this.amenities = amenities;
    }

    getOnsen() {
      return {
        name: this.name,
        buildings: this.buildings,
        yard: this.yard,
        amenities: this.amenities,
      };
    }
  }

  //BUILDER
  class OnsenBuilder {
    constructor(name) {
      this.name = name;
      this.buildings = [];
      this.yard = {};
      this.amenities = [];
    }

    addBuilding(buildingType, details) {
      this.buildings.push({ type: buildingType, ...details });
      return this;
    }

    addYardFeature(feature, description) {
      this.yard[feature] = description;
      return this;
    }

    addAmenity(amenity) {
      this.amenities.push(amenity);
      return this;
    }

    addHotSpring(count) {
      this.amenities.push({ type: "hotspring", count });
      return this;
    }

    addRotenburo(count) {
      this.amenities.push({ type: "rotenburo", count });
      return this;
    }

    addIndoorBath(count) {
      this.amenities.push({ type: "indoorBath", count });
      return this;
    }

    addOutdoorBath(count) {
      this.amenities.push({ type: "outdoorBath", count });
      return this;
    }

    build() {
      return new Onsen(this.name, this.buildings, this.yard, this.amenities);
    }
  }

  // USAGE EXAMPLE
  const myOnsen = new OnsenBuilder("Relaxing Springs")
    .addBuilding("mainHall", { capacity: 100 })
    .addBuilding("restaurant", { capacity: 50 })
    .addYardFeature("garden", "traditional Japanese garden with stone pathways")
    .addHotSpring(3)
    .addRotenburo(2)
    .addIndoorBath(1)
    .addAmenity("massage service")
    .addAmenity("tea service")
    .build();

  console.log(myOnsen.getOnsen());
  
  //OUTPUT

 {
  amenities: [{
  count: 3,
  type: "hotspring"
  }, {
  count: 2,
  type: "rotenburo"
  }, {
  count: 1,
  type: "indoorBath"
  }, "massage service", "tea service"],
  buildings: [{
  capacity: 100,
  type: "mainHall"
  }, {
  capacity: 50,
  type: "restaurant"
  }],
  name: "Relaxing Springs",
    yard: {
      garden: "traditional Japanese garden with stone pathways"
    }
  }`;

let codeString_complex_builder = `class Onsen {
    constructor(name, buildings, yard, amenities) {
      this.name = name;
      this.buildings = buildings;
      this.yard = yard;
      this.amenities = amenities;
    }

    getOnsen() {
      return {
        name: this.name,
        buildings: this.buildings,
        yard: this.yard,
        amenities: this.amenities,
      };
    }
  }

  //ABSTRACT BUILDER
  class OnsenBuilder {
    constructor(name) {
      this.name = name;
      this.buildings = [];
      this.yard = {};
      this.amenities = [];
    }

    addBuildings() {
      throw new Error("addBuildings() must be implemented");
    }

    addYard() {
      throw new Error("addYard() must be implemented");
    }

    addAmenities() {
      throw new Error("addAmenities() must be implemented");
    }

    build() {
      return new Onsen(this.name, this.buildings, this.yard, this.amenities);
    }
  }

  //CONCRETE BUILDERS
  class MainOnsen extends OnsenBuilder {
    addBuildings() {
      this.buildings.push(
        {
          type: "mainHall",
          capacity: 500,
          style: "traditional Japanese",
          features: "gold leaf ceiling, dragon pillars",
        },
        {
          type: "diningHall",
          capacity: 300,
          speciality: "mystery food, spirit delicacies",
        },
        {
          type: "BiolerRoom",
          capacity: 5,
          purpose: "Home to Kamajī and countless Sootballs",
        }
      );
      return this;
    }

    addYard() {
      this.yard = {
        spiritRiver: "glowing river surrounding the bathhouse",
        lanterns: "thousands of red paper lanterns",
        stones: "ancient moss-covered stones",
        noGodsFence: "mysterious barrier between worlds",
        moonlit: true,
        spirits: "occasional glimpses of spirits passing by",
      };
      return this;
    }

    addAmenities() {
      this.amenities.push(
        {
          type: "goldBaths",
          count: 7,
          description: "ornate gold-lined bathing pools",
        },
        { type: "spiritBath", count: 1, description: "for purifying spirits" },
        {
          type: "rotenburo",
          count: 3,
          description: "outdoor baths overlooking river",
        },
        "gold dust bath bombs",
        "herbal remedies from Zeniba",
        "No-Face encounter experience",
        "Haku guide service",
        "sacred bathing oils",
        "spirit soothing music",
        "enchanted towels",
        "memory-restoring tea ceremony"
      );
      return this;
    }
  }

  class InfinityCastleOnsenBuilder extends OnsenBuilder {
    addBuildings() {
      this.buildings.push(
        {
          type: "infiniteTowers",
          capacity: 1000,
          style: "recursive, impossible architecture",
        },
        {
          type: "mirrorHalls",
          capacity: 500,
          description: "endless reflections and illusions",
        },
        {
          type: "floatingRooms",
          capacity: 300,
          feature: "rooms suspended in void",
        },
        {
          type: "treasureVault",
          capacity: 50,
          contents: "hoarded demonic artifacts",
        },
        {
          type: "bloodmoonBath",
          capacity: 200,
          atmosphere: "crimson energies flow through chambers",
        },
        {
          type: "dimensionalBridge",
          capacity: 100,
          purpose: "connects infinite realities",
        }
      );
      return this;
    }

    addYard() {
      this.yard = {
        voidscape: "surrounded by infinite darkness and chaos",
        bloodMoon: "eternal crimson moon hanging in sky",
        floatingIslands: "castle pieces drift in endless void",
        demonsRealm: "palpable supernatural malevolence",
        impossible: "geometry defies natural laws",
        recursive: "boundaries between inside and outside blur",
        chaotic: true,
        grandeur: "overwhelming scale and power",
      };
      return this;
    }

    addAmenities() {
      this.amenities.push(
        {
          type: "bloodBath",
          count: 3,
          description: "infused with demonic power",
        },
        {
          type: "voidRotenburo",
          count: 2,
          description: "overlooks the infinite abyss",
        },
        {
          type: "mirrorPool",
          count: 4,
          description: "shows alternate timelines",
        },
        "demonic possession therapy",
        "soul absorption experience",
        "unlimited desires fulfillment",
        "immortality enhancement treatment",
        "chaos meditation chambers",
        "dimensional hopping tours",
        "blood moon ritual bathing",
        "corrupting luxury indulgence"
      );
      return this;
    }
  }

  //DIRECTOR
  class OnsenDirector {
    constructor(builder) {
      this.builder = builder;
    }

    construct() {
      this.builder.addBuildings();
      this.builder.addYard();
      this.builder.addAmenities();
      return this.builder.build();
    }
  }

  //USAGE
  const spiritWorldDirector = new OnsenDirector(
    new MainOnsen("Bathhouse of the Spirits")
  );
  const spiritWorldOnsen = spiritWorldDirector.construct();
  console.log("Spirit World Onsen:", spiritWorldOnsen.getOnsen());

  const infinityDirector = new OnsenDirector(
    new InfinityCastleOnsenBuilder("Infinity Castle")
  );
  const infinityOnsen = infinityDirector.construct();
  console.log("Infinity Castle Onsen:", infinityOnsen.getOnsen());
  
  
  //OUTPUT

  
  "Spirit World Onsen:",
    {
      amenities: [
        {
          count: 7,
          description: "ornate gold-lined bathing pools",
          type: "goldBaths",
        },
        {
          count: 1,
          description: "for purifying spirits",
          type: "spiritBath",
        },
        {
          count: 3,
          description: "outdoor baths overlooking river",
          type: "rotenburo",
        },
        "gold dust bath bombs",
        "herbal remedies from Zeniba",
        "No-Face encounter experience",
        "Haku guide service",
        "sacred bathing oils",
        "spirit soothing music",
        "enchanted towels",
        "memory-restoring tea ceremony",
      ],
      buildings: [
        {
          capacity: 500,
          features: "gold leaf ceiling, dragon pillars",
          style: "traditional Japanese",
          type: "mainHall",
        },
        {
          capacity: 300,
          speciality: "mystery food, spirit delicacies",
          type: "diningHall",
        },
        {
          capacity: 5,
          purpose: "Home to Kamajī and countless Sootballs",
          type: "BiolerRoom",
        },
      ],
      name: "Bathhouse of the Spirits",
      yard: {
        lanterns: "thousands of red paper lanterns",
        moonlit: true,
        noGodsFence: "mysterious barrier between worlds",
        spiritRiver: "glowing river surrounding the bathhouse",
        spirits: "occasional glimpses of spirits passing by",
        stones: "ancient moss-covered stones",
      },
    };

  
  `;

export const Builder = (
  <div>
    <h1>Builder Pattern</h1>
    <div class="section">
      <p>
        Allows you to construct complex objects step by step. Instead of
        creating an object with a massive constructor that has many parameters
        (for example, new House(windows, doors, roof, garage, pool, garden,
        fence)), you use a builder that lets you add only the features you want,
        one at a time.
      </p>
      <p>
        This pattern is useful when you have objects with many optional
        configurations or when the construction process involves multiple steps.
        The builder handles the construction logic, so your code stays clean and
        readable, and you can create different variations of the same object
        type without creating multiple constructors.
      </p>
    </div>
    <div class="section roles">
      <h3>The 4 Roles</h3>
      <p>Who builds</p>
      <ul>
        <li>
          <strong>Builder (Interface):</strong> Defines the steps to build a
          product (abstract methods).
        </li>
        <li>
          <strong>Concrete Builder:</strong> Implements the building steps to
          create a specific type of product.
        </li>
      </ul>

      <p>What gets built</p>
      <ul>
        <li>
          <strong>Product:</strong> The complex object being constructed.
        </li>
        <li>
          <strong>Director (Optional):</strong> Orchestrates the building
          process by calling builder methods in a specific order.
        </li>
      </ul>
    </div>
    <div class="section relationship">
      <h3>The key relationship:</h3>
      <ol>
        <li>
          Concrete Builder A creates → Product (with specific configuration A)
        </li>
        <li>
          Concrete Builder B creates → Product (with specific configuration B)
        </li>
        <li>
          Director orchestrates → Builders (provides preset configurations)
        </li>
      </ol>
    </div>

    <div class="section use-cases">
      <h3>JavaScript Use Case - for flexible, custom construction</h3>
      <p>
        One builder class that handles all construction Flexible methods like
        addBuilding(), addYardFeature(), addAmenity() that you chain together No
        preset configurations — you manually call each method to build what you
        want Easy customization — just skip methods you don't need Use case:
        When you want maximum flexibility and don't mind specifying each step
      </p>{" "}
      <br></br>
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        showLineNumbers
        wrapLines={true}
      >
        {codeString_basic_builder}
      </SyntaxHighlighter>
    </div>

    <div class="section use-cases">
      <h3>
        JavaScript Use Case - for predefined, standardized products with
        different variations
      </h3>
      <p>
        Abstract builder that defines the structure (addBuildings(), addYard(),
        addAmenities()) Concrete builders (MainOnsen,
        InfinityCastleOnsenBuilder) that implement specific configurations
        Director that orchestrates the construction sequence Preset
        configurations — each concrete builder creates a complete, predefined
        onsen Less flexible — you get the full preset or nothing Use case: When
        you have different types of onsen with standardized building processes
      </p>
      <br></br>
      <SyntaxHighlighter
        language="javascript"
        style={docco}
        showLineNumbers
        wrapLines={true}
      >
        {codeString_complex_builder}
      </SyntaxHighlighter>
    </div>
    <div class="section why-use-it">
      <h3>Why Use It?</h3>
      <p>Benefits:</p>
      <ol>
        <li>
          Readable code - Method chaining is clearer than long constructor
          parameters
        </li>
        <li>
          Flexible construction - Build only what you need, skip optional parts
        </li>
        <li>Method chaining - Clean, fluent API that reads like English</li>
        <li>
          Different representations - Same building process can create different
          variations
        </li>
        <li>
          No telescoping constructors - Avoid having multiple constructors with
          different parameter combinations
        </li>
      </ol>
    </div>

    <div class="section when-to-use-it">
      <h3>When to Use It?</h3>
      <ul>
        <li>When objects have many optional parameters (4+)</li>
        <li>When construction requires multiple steps in a specific order</li>
        <li>
          When you need to create different representations of the same object
        </li>
        <li>
          When you want to separate construction logic from the object itself
        </li>
        <li>When constructor parameters would be confusing or unclear</li>
      </ul>
    </div>

    <div class="section summary">
      <h3>Think of It As</h3>
      <p>
        <strong>Builder = Custom Subway sandwich</strong>
      </p>
      <ul>
        <li>You start with bread (create builder)</li>
        <li>Add ingredients one by one (call setter methods)</li>
        <li>Each step is optional (skip what you don't want)</li>
        <li>
          Finally get your sandwich (call <code>build()</code>)
        </li>
        <li>
          Different builders = different recipes (veggie builder, meat builder,
          premium builder)
        </li>
      </ul>
      <p>
        <strong>That's the Builder Pattern!</strong>
      </p>
    </div>
  </div>
);
