import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🥥 Coconat",
      color: "red",
    },
    {
      id: 3,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 4,
      name: "🍋 Lemon",
      color: "blue",
    },
    {
      id: 5,
      name: "🍇 Grape",
      color: "pink",
    },
  ];
  console.log(fruits);
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
