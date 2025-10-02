let clickCounter = 0;

const planetElements = document.querySelectorAll(".planet");

planetElements.forEach(updatePlanet);

function updatePlanet(planetElement) {
    planetElement.classList.add("blue");
}

function selectPlanet(planet) {
    const resultElement = document.querySelector(".result");
    resultElement.textContent = planet;
    incrementClickCounter();
}

function incrementClickCounter() {
    clickCounter = clickCounter + 1;
    const clickElement = document.querySelector(".click-count");
    clickElement.textContent = clickCounter;
}

const mercuryButton = document.querySelector(".mercury");
mercuryButton.addEventListener("click", selectMercury);
const venusButton = document.querySelector(".venus");
venusButton.addEventListener("click", selectVenus);
const earthButton = document.querySelector(".earth");
earthButton.addEventListener("click", selectEarth);

function selectMercury() {
    selectPlanet("Mercury");
}

function selectVenus() {
    selectPlanet("Venus");
}

function selectEarth() {
    selectPlanet("earth");
}

// find all button elements
const planetButtonElements = document.querySelectorAll(".planet-button");

// loop through all button elements
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener to each button element
function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

// when a button is clicked, this is what we want to happen
function planetButtonClick(event) {
    // find the HTML element that was clicked
    const clickedButton = event.currentTarget;

    const resultElement = document.querySelector(".result");
    resultElement.textContent = "You selected " + clickedButton.textContent;

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);

    // add the selected state just to button that was clicked
    clickedButton.classList.add("currently-selected-button");

    // generate the class of the selected planet's details element
    // for example: ".planet-details-Venus" or ".planet-details-Earth"
    const detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;

    // find this element
    let detailsElement = document.querySelector(detailsElementCssSelector);

    if ( detailsElement === null ) {
        detailsElement = document.querySelector('.no-info');
    }

    // remove selected state from all details elements
    const planetDetailElements = document.querySelectorAll(".planet-details");
    planetDetailElements.forEach(updatePlanetDetailState);

    // add selected state just to the clicked button
    detailsElement.classList.add("currently-selected-planet");

    incrementClickCounter();
}

// remove the currently selected state for all buttons
function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}

function updatePlanetDetailState(planetDetailElement) {
    planetDetailElement.classList.remove("currently-selected-planet");
}