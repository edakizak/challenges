import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}
function Article() {
  return (
    <article className="article">
      <h2 className="article__title">article title </h2>
      <label htmlFor="text">
        label
        <input id="text" type="text" />
      </label>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Iceland"
      ></a>
    </article>
  );
}
