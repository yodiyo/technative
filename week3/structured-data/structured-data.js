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
