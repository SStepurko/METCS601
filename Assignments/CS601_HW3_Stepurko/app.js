var userName;

function start() {
  alertUser("Hello");
  userName = askUser("Please input your name");
  alertUser("Welcome " + userName);
	doSum();
}

function doSum() {
	do {
		userInput = askUser(userName + " enter two numbers with ',' as a separator");
	} while (!isValid(userInput));
	let userNumbers = userInput.split(",");
	let result = addTwoNumbers(userNumbers[0], userNumbers[1]);
	if (isNaN(result)) {
		alertUser("Not a numbers")
	} else {
		alertUser("Result is " + result);
		alertUser(checkResult(result));
	}
	ranOneMore();
}

function askUser(msg) {
	do {
		input = prompt(msg);
	} while (input == null || input.length == 0);
	return input;
}

function isValid(str) {
  var validRegex = /\d*\,\d*/;
  if (str.match(validRegex)) { 
    return true;
  } else {      
    return false;
  }
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
	if (confirm(userName + " do you want to sum more?")) {
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