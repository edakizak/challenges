import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="blue" text="click me" />
    </div>
  );
}

function Button({ color, disabled, text }) {
  return (
    <div>
      <button style={{ backgroundColor: color }} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}
