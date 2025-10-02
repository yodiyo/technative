function createPlanetSentence(planetName) {
    return "I quite like the planet " + planetName;
}

// call the function to style each planet
const mercurySentence = createPlanetSentence("Mercury");
const venusSentence = createPlanetSentence("Venus");
const earthSentence = createPlanetSentence("Earth");

// this is where you add the code to add these three sentences to the page!
const mercuryElement = document.querySelector(".mercury");
mercuryElement.textContent = mercurySentence;

const venusElement = document.querySelector(".venus");
venusElement.textContent = venusSentence;

const earthElement = document.querySelector(".earth");
earthElement.textContent = earthSentence;

function addColourToPlanet(planetSelector, planetName, colour) {
    const planetElement = document.querySelector(planetSelector);
    planetElement.textContent = planetName;
    planetElement.classList.add(colour);

}

addColourToPlanet( ".earth", "Earth", "blue");
addColourToPlanet( ".venus", "Venus", "orange");
addColourToPlanet( ".mercury", "Mercury", "green");