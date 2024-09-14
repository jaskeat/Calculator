let num1;
let symbol;

function append(number) {
	const display = document.getElementsByClassName("display-input");

	if (display[0].value.includes(".") && number === ".") {
		return;
	} else if (display[0].value.length <= 10) {
		display[0].value = display[0].value + number;
	}
}

function operator(n, buttonElement) {
	const display = document.getElementsByClassName("display-input");

	num1 = document.getElementsByClassName("display-input");
	num1 = num1[0].value;

	symbol = n;

	num1.value = "";

	display[0].value = "";

	const operatorButtons = document.getElementsByClassName("obtn");
	for (let i = 0; i < operatorButtons.length; i++) {
		operatorButtons[i].classList.remove("highlighted");
	}

	// Add the highlighted class to the clicked button
	buttonElement.classList.add("highlighted");

	return num1, symbol;
}

function calculate() {
	const operatorButtons = document.getElementsByClassName("obtn");
	for (let i = 0; i < operatorButtons.length; i++) {
		operatorButtons[i].classList.remove("highlighted");
	}

	const display = document.getElementsByClassName("display-input");
	num2 = document.getElementsByClassName("display-input");
	num2 = num2[0].value;

	let result;

	switch (symbol) {
		case "+":
			result = parseInt(num1) + parseInt(num2);
			display[0].value = result;
			break;
		case "-":
			result = parseFloat(num1) - parseFloat(num2);
			display[0].value = result;
			break;
		case "*":
			result = parseFloat(num1) * parseFloat(num2);
			display[0].value = result;
			break;
		case "/":
			result = parseFloat(num1) / parseFloat(num2);
			display[0].value = result;
			break;
		default:
			return;
	}
}

function clearDisplay() {
	const display = document.getElementsByClassName("display-input");
	display[0].value = "";
	num1 = "";
	num2 = "";
	symbol = "";
}

function deleteLast() {
	const display = document.getElementsByClassName("display-input");
	display[0].value = display[0].value.slice(0, -1);
}
