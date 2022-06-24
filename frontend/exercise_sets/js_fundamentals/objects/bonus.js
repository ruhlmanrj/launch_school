// Replace the hypen sequences so that the code works as intended and
// explain why the implementation works.

function calculateBonus() {
  // return _________[1] ? _________[0] / 2 : 0;
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000

// This works because an arguments object is made available within
// every function in JavaScript that references all of the arguments
// passed into the function.
