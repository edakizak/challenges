const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((recipes) => {
  return recipes.title;
});

const titlesWithDuration = recipes.map((recipes) => {
  return `${recipes.title} (${recipes.duration}min)`;
});

const timePerServing = recipes.map((recipes) => {
  return recipes.duration / recipes.servings;
});

const allTitlesInOneString = recipes
  .map((recipes) => {
    return `${recipes.title}`;
  })
  .join(",");

const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipes) => {
  return recipes.duration <= 60;
});

const allRecipesWithMoreThan2Servings = recipes.filter((recipes) => {
  return recipes.servings > 2;
});

const allRecipesWithTitlesLongerThan12Characters = recipes.filter(
  (recipes) => recipes.title.length > 12
);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
