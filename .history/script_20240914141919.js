let num1;
let symbol;

function append(number) {
	const display = document.getElementsByClassName("display-input");

	if (display[0].value.length <= 10) {
		display[0].value = display[0].value + number;
		return;
	}
}

function operator(n) {
	const display = document.getElementsByClassName("display-input");

	num1 = document.getElementsByClassName("display-input");
	num1 = num1[0].value;

	symbol = n;

	num1.value = "";

	display[0].value = "";
	return num1, symbol;
}

function calculate() {
	const display = document.getElementsByClassName("display-input");
	num2 = document.getElementsByClassName("display-input");

	console.log(num2[0].value);

	let result;

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
