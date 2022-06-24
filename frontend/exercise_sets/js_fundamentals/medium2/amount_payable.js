// What does the following code log and why?

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));
// logs 40. This is due to lexical scoping rules; since `startingBalance`
// was defined in an outer scope relative to the function `totalPayable`,
// it is accessible within the function.

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// logs 45. This is due to lexical scoping rules; since `startingBalance`
// was defined in an outer scope relative to the function `totalPayable`,
// it is accessible within the function.
