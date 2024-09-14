let num1;
let symbol;

function append(number) {
	const display = document.getElementsByClassName("display-input");

	if (display[0].value.length <= 10) {
		display[0].value = display[0].value + number;
		return;
	}
}

function operator(n, buttonElement) {
	const display = document.getElementsByClassName("display-input");

	num1 = document.getElementsByClassName("display-input");
	num1 = num1[0].value;

	symbol = n;

	num1.value = "";

	display[0].value = "";

	const operatorButtons = document.getElementsByClassName("operators");
	for (let i = 0; i < operatorButtons.length; i++) {
		operatorButtons[i].classList.remove("highlighted");
		console.log(operatorButtons[i]);
	}

	// Add the highlighted class to the clicked button
	buttonElement.classList.add("highlighted");

	return num1, symbol;
}

function calculate() {
	const display = document.getElementsByClassName("display-input");
	num2 = document.getElementsByClassName("display-input");

	let result;

	console.log(num1);
	console.log(num2[0].value);
	console.log(typeof symbol);

	switch (symbol) {
		case "+":
			result = parseFloat(num1) + parseFloat(num2);
			console.log(result);
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
}
