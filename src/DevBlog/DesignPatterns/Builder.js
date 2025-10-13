import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
    <div class="section">
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
    <div class="section">
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

    <div class="section">
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

    <div class="section">
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

    <div class="section">
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
