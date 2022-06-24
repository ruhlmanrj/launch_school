// Takes a specified integer and calculates either the sum or product
// of all numbers from 1 to that integer.

const rlSync = require('readline-sync');

const computeSum = endNum => {
  let sum = 0;
  for (let currentNum = 1; currentNum <= endNum; currentNum++) {
    sum += currentNum;
  }

  return sum;
}

const computeProduct = endNum => {
  let product = 1;
  for (let currentNum = 1; currentNum <= endNum; currentNum++) {
    product *= currentNum;
  }

  return product;
}

let endNum;
while (true) {
  endNum = rlSync.question('Please enter an integer greater than 0: ');

  endNum = Number(endNum);
  if (Number.isInteger(endNum)) {
    break;
  }

  console.clear();
  console.log("You didn't enter an integer.");
}

let operation;
while (true) {
  operation = rlSync.question(
    "Enter 's' the compute the sum, or 'p' to compute the product: "
  );

  if (/^[sp]$/i.test(operation)) {
    break;
  }

  console.clear();
  console.log("You didn't enter 's' or 'p'.");
}

let total;
if (operation === 's') {
  operation = 'sum';
  total = computeSum(endNum);
} else {
  operation = 'product';
  total = computeProduct(endNum);
}

console.log(
  `The ${operation} of the integers between 1 and ${endNum} is ${total}.`
);


// Further Exploration
//
// Reimplement the `computeSum` and `computeProduct` functions
// to take an array of integers as an argument.

function computeSum(numbers) {
  return numbers.reduce((total, number) => total + number);
};

function computeProduct(numbers) {
  return numbers.reduce(
    (total, number) => total * number,
    1)
};
