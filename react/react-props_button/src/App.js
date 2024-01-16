import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("Clicked!");
  }
  return (
    <div>
      <Button color="blue" text="click me" onClick={handleClick} />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <div>
      <button
        style={{ backgroundColor: color, height: "100px" }}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
