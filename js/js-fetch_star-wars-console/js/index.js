console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log("Dart Vader", error);
  }
}
fetchData();
