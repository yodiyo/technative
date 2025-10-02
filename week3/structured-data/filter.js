function requestData() {
	const dataUrl = "structured-data.json";

	fetch(dataUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log("Data :", data);
			data.forEach(addPlanetToPage);
			// we will add a foreach loop to add content to our page here
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

// request data on page load
requestData();

function addPlanetToPage(planet) {
	// create a div element for the planet
	const planetElement = document.createElement("div");
	planetElement.classList.add("planet");
	planetElement.classList.add("planet-" + planet.name);

	// add the planet name
	const planetName = document.createElement("p");
	planetName.classList.add("planet-name");
	planetName.textContent = planet.name;
	planetElement.appendChild(planetName);

	// add the planet to the page
	const planetListElement = document.querySelector(".planets");
	planetListElement.appendChild(planetElement);

	const planetCircumference = document.createElement("p");
	planetCircumference.classList.add("planet-circumference");
	planetCircumference.textContent = "Circumference: " + planet.circumference;
	planetElement.appendChild(planetCircumference);

	const planetDistanceFromSun = document.createElement("p");
	planetDistanceFromSun.classList.add("planet-distance");
	planetDistanceFromSun.textContent =
		"Distance from sun: " + planet.distanceFromSun;
	planetElement.appendChild(planetDistanceFromSun);
}

// listen to changes in the search form
const searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
let searchValue = "";

// check what search term has been entered
function updateSearchValue() {
	// trim() removes any spaces before/after the input
	// toLowerCase() makes the entered text lowercase
	searchValue = searchInput.value.trim().toLowerCase();

	console.log("You searched for: " + searchValue);

	// you will add some more code here shortly...
	// loop through all planet elements
	// show or hide each one based on the search term
	const planetElements = document.querySelectorAll(".planet");
	planetElements.forEach(showOrHidePlanet);
}

function showOrHidePlanet(planetElement) {
	// if no search value is set, show the planet
	if (searchValue.length === 0) {
		planetElement.classList.remove("hide");

		// if a search term has been set,
		// only display the planet if its name matches the search term
	} else {
		// get the name of the planet from its planet-name element
		const planetName = planetElement
			.querySelector(".planet-name")
			.textContent.toLowerCase();
		if (planetName.includes(searchValue)) {
			planetElement.classList.remove("hide");
		} else {
			planetElement.classList.add("hide");
		}
	}
}
