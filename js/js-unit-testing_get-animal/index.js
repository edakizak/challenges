export function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  } else if (typeof animal === "string") {
    return "I like dogs!";
  } else {
    return "I do not like animals at all!";
  }
}

console.log(getAnimal);
