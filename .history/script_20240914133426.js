function append(number) {
	const display = document.getElementsByClassName("display-input");

	if (display[0].value.length <= 10) {
		display[0].value = display[0].value + number;
		return;
	}
}

function operator(n) {
	const num1 = document.getElementsByClassName("display-input");

	const symbol = n;

	console.log(num1[0].value, symbol);
}
