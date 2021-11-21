alert("Hello");
const userName = askUserName();
alert("Welcome " + userName);

function askUserName() {
    return prompt("Please input your name");
}

let userInput = prompt(userName + " please enter two numbers with ',' as separator");
userNumbers = userInput.split(",");
let result = addTwoNumbers(userNumbers[0], userNumbers[1]);

function addTwoNumbers(firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    return firstNumber + secondNumber;
}

alert("result is " + result);

console.log(userNumbers);