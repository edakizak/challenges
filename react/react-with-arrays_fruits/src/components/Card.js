import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p className={"card card--" + color}>
      <h1>{name}</h1>
    </p>
  );
}
