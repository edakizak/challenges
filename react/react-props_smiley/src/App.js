import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
    </div>
  );
}

function Smiley({ isHappy }) {
  const SmileyEmoji = isHappy ? <span>🙃</span> : <span>😔</span>;
  return <div> {SmileyEmoji}</div>;
}
