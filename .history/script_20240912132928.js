function append(number) {
	const display = document.getElementsByClassName("display-input");

	if (length(display[0]) <= 10) {
		display[0].value = display[0].value + number;
		return;
	}
}
