import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Header</h1>
      <p>Pragraph</p>
      <input type="text" />
    </article>
  );
}
