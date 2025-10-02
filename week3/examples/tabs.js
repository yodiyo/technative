// find all button elements
const planetButtonElements = document.querySelectorAll(".planet-button");

const planetDetailElements = document.querySelectorAll(".planet-details");

// loop through all button elements
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener to each button element
function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

// on click, do something with the selected button
function planetButtonClick(event) {
    // find the HTML element that was clicked
    const clickedButton = event.currentTarget;

    // generate the class of the selected planet's details element
    // for example: ".planet-details-Venus" or ".planet-details-Earth"
    const detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;

    // find this element
    let detailsElement = document.querySelector(detailsElementCssSelector);

    if ( detailsElement === null ) {
        detailsElement = document.querySelector('.no-info');
    }

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);
    planetDetailElements.forEach(updatePlanetDetailState);
    // add the selected state just to button that was clicked
    clickedButton.classList.add("currently-selected-button");
    detailsElement.classList.add("currently-selected-planet")
}

// remove the currently selected state for all buttons
function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}

function updatePlanetDetailState(planetDetailElement) {
    planetDetailElement.classList.remove("currently-selected-planet");
}