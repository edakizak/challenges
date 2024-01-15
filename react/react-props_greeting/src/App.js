import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="eda" />
    </div>
  );
}

function Greeting({ name }) {
  return <div>Hello, {name}!</div>;
}
