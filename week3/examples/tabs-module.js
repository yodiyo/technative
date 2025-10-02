class TabsModule {
	constructor(selector) {
		this.tabsContainer = document.querySelector(selector);

		this.tabButtons = this.tabsContainer.querySelectorAll(".tab-button");

		this.tabContents = this.tabsContainer.querySelectorAll(".tab-content");
		this.tabButtons.forEach((tabButton) => {
			tabButton.addEventListener("click", (event) =>
				this.tabClicked(event)
			);
		});
	}

	tabClicked(event) {
		const clickedButton = event.currentTarget;
		const tabId = clickedButton.dataset.tab;

		const detailsElement = this.tabsContainer.querySelector(
			`.tab-content[data-tab-content="${tabId}"]`
		);

		// Remove active class from all buttons and content
		this.tabButtons.forEach((button) => button.classList.remove("active"));
		this.tabContents.forEach((content) =>
			content.classList.remove("active")
		);

		// Add active class to clicked button and corresponding content
		clickedButton.classList.add("active");
		if (detailsElement) {
			detailsElement.classList.add("active");
		}
	}
}

export default TabsModule;

// // find all button elements
// const tabButtonElements = document.querySelectorAll(".tab-button");

// const tabDetailElements = document.querySelectorAll(".tab-details");

// // loop through all button elements
// tabButtonElements.forEach(addtabButtonListener);

// // add an event listener to each button element
// function addtabButtonListener(tabButtonElement) {
//     tabButtonElement.addEventListener("click", tabButtonClick);
// }

// // on click, do something with the selected button
// function tabButtonClick(event) {
//     // find the HTML element that was clicked
//     const clickedButton = event.currentTarget;

//     // generate the class of the selected tab's details element
//     // for example: ".tab-details-Venus" or ".tab-details-Earth"
//     const detailsElementCssSelector = ".tab-details-" + clickedButton.dataset.tab;

//     // find this element
//     let detailsElement = document.querySelector(detailsElementCssSelector);

//     if (detailsElement === null) {
//         detailsElement = document.querySelector('.no-info');
//     }

//     // remove selected state from all buttons
//     tabButtonElements.forEach(updateClickedButtonState);
//     tabDetailElements.forEach(updatetabDetailState);
//     // add the selected state just to button that was clicked
//     clickedButton.classList.add("active");
//     detailsElement.classList.add("active")
// }

// // remove the currently selected state for all buttons
// function updateClickedButtonState(tabButtonElement) {
//     tabButtonElement.classList.remove("active");
// }

// function updatetabDetailState(tabDetailElement) {
//     tabDetailElement.classList.remove("active");
// }
