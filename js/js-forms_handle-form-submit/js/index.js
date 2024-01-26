console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log("Data", data);

  e.target.reset();
  e.target.elements.firstName.focus();
});