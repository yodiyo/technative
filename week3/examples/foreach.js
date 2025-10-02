// retrieve all planet elements
const planetElements = document.querySelectorAll(".planet");

// use this function to add the class to each planet
function updatePlanet(planetElement) {
    planetElement.classList.add("orange");
}

// loop through the planet elements
planetElements.forEach(updatePlanet);