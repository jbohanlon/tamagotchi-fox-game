import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) => {
	document
		.querySelector(`.${ICONS[icon]}-icon`)
		.classList.toggle("highlighted", show);
};

export default function initButtons(handleUserAction) {
	let selectedIcon = 0;

	// target is the DOM element that received the click event
	function buttonClick({ target }) {
		if (target.classList.contains("left-btn")) {
			toggleHighlighted(selectedIcon, false);
			// Loop around if you try to move left from the left button
			selectedIcon = (2 + selectedIcon) % ICONS.length;
			toggleHighlighted(selectedIcon, true);
		} else if (target.classList.contains("right-btn")) {
			toggleHighlighted(selectedIcon, false);
			// Loop around if you try to move right from the right button
			selectedIcon = (1 + selectedIcon) % ICONS.length;
			toggleHighlighted(selectedIcon, true);
		} else {
			handleUserAction(ICONS[selectedIcon]);
		}
	}

	document.querySelector(".buttons").addEventListener("click", buttonClick);
}
