var userName;

function start() {
  alertUser("Hello");
  userName = askUser("Please input your name");
  alertUser("Welcome " + userName);
	let userInput = askUser(userName + " enter two numbers with ',' as a separator");
	let userNumbers = userInput.split(",");
	let result = addTwoNumbers(userNumbers[0], userNumbers[1]);
	console.log(typeof(result));
	alertUser("Result is " + result);
	alertUser(checkResult(result));
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


// let userInput = prompt(userName + " please enter two numbers with ',' as separator");
// userNumbers = userInput.split(",");
// let result = addTwoNumbers(userNumbers[0], userNumbers[1]);

function addTwoNumbers(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    return firstNumber + secondNumber;
}

// alert("result is " + result);

// console.log(userNumbers);