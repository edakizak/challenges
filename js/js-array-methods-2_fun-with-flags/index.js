import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.find((countryname) =>
    countryname.countries.name.startsWith(string)
  );

  const foundCountries = countries
    .filter((countriesname) => countriesname.countries.name.startsWith(string))
    .forEach((countriesname) => console.log(countriesname));

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
});
