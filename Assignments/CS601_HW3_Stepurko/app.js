var userName;

function start() {
  alertUser("Hello");
  userName = askUser("Please input your name");
  alertUser("Welcome " + userName);
	doSum();
}

function doSum() {
	let userInput = askUser(userName + " enter two numbers with ',' as a separator");
	let userNumbers = userInput.split(",");
	let result = addTwoNumbers(userNumbers[0], userNumbers[1]);
	alertUser("Result is " + result);
	alertUser(checkResult(result));
	ranOneMore();
}

function askUser(msg) {
	let input = prompt(msg);
	return input;
}

function alertUser(msg) {
	alert(msg);
}

function checkResult(result) {
	if (result > 10) {
		return "That is a big number";
	} else {
		return "That is a small number";
	}
}

function ranOneMore() {
	if (confirm(name + " do you want to sum more?")) {
		doSum();
	} else {
		alertUser("Bye " + userName);
	}
}

function addTwoNumbers(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    return firstNumber + secondNumber;
}