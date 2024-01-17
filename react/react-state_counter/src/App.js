import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0); // initialize state with <useState>

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1); // set up the event handler to decrement count
            console.log("🤔");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1); //// set up the event handler to increment count
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
