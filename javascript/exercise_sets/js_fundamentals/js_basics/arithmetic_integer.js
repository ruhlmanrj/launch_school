// Takes 2 numbers as input and outputs the result of 6
// different arithmetical operations on the numbers.

const readlineSync = require('readline-sync'); // For obtaining input

function addPrompt(message) {
  return `==> ${message}`;
}

let message      = addPrompt('Enter the first number: ');
let firstNumber  = Number(readlineSync.question(message));
message          = addPrompt('Enter the second number: ');
let secondNumber = Number(readlineSync.question(message));

let sum           = firstNumber + secondNumber
message           = addPrompt(`${firstNumber} + ${secondNumber} = ${sum}`);
console.log(message);

let difference    = firstNumber - secondNumber
message           = addPrompt(`${firstNumber} - ${secondNumber} = ${difference}`);
console.log(message);

let product       = firstNumber * secondNumber
message           = addPrompt(`${firstNumber} * ${secondNumber} = ${product}`);
console.log(message);

let quotient      = Math.floor(firstNumber / secondNumber);
message           = addPrompt(`${firstNumber} / ${secondNumber} = ${quotient}`);
console.log(message);

let remainder     = firstNumber % secondNumber
message           = addPrompt(`${firstNumber} % ${secondNumber} = ${remainder}`);
console.log(message);

let power_product = firstNumber ** secondNumber
message           = addPrompt(`${firstNumber}**${secondNumber} = ${power_product}`);
console.log(message);
