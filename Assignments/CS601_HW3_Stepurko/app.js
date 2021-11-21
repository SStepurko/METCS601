var userName;

function start() {
  alertUser("Hello");
  userName = askUser("Please input your name");
  alertUser("Welcome " + userName);
}

function askUser(msg) {
	let input = prompt(msg);
	return input;
}

function alertUser(msg) {
	alert(msg);
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