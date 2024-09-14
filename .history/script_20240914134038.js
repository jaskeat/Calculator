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
	num1 = document.getElementsByClassName("display-input");
	num1 = num1[0].value;

	symbol = n;

	console.log(num1, symbol);
	return num1, symbol;
}

function calculate() {
	num2 = document.getElementsByClassName("display-input");
	let result;

	switch (symbol) {
		case "+":
			result = parseFloat(num1) + parseFloat(num2);
			break;
		case "-":
			result = parseFloat(num1) - parseFloat(num2);
			break;
		case "*":
			result = parseFloat(num1) * parseFloat(num2);
			break;
		case "/":
			result = parseFloat(num1) / parseFloat(num2);
			break;
		default:
			return;
	}
}
