import { getRandomColor } from "./utils/randomColor";
import { Circle } from "./components/Circle/Circle";
import { Square } from "./components/Square/Square";
import { Pentagon } from "./components/Pentagon/Pentagon";
console.clear();

const root = document.getElementById("root");

const circle = Circle(getRandomColor);

const square = Square(getRandomColor);

const pentagon = Pentagon(getRandomColor);

root.append(circle, square, pentagon);
