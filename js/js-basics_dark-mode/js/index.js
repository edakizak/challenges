console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const buttonDarkElement = document.querySelector(
  '[data-js="dark-mode-button"]'
);
const buttonLightElement = document.querySelector(
  '[data-js="light-mode-button"]'
);
const buttonToggleElement = document.querySelector('[data-js="toggle-button"]');

button.addEventListener("click", () => {});

buttonDarkElement.addEventListener("click", () => {
  buttonDarkElement.classList.add("button--dark");
  buttonDarkElement.classList.add("body.dark");
  console.log("darkmode");
});

buttonLightElement.addEventListener("click", () => {
  buttonLightElement.classList.add("button--light");
  console.log("lightmode");
});

buttonToggleElement.addEventListener("click", () => {
  buttonToggleElement.classList.toggle("button--toggle");
  console.log("toggle");
});
