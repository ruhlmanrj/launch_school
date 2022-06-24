// Outputs a message stating the age of 'Teddy'. The age is a randomly
// generated number between 20 and 200 (inclusive).

// How to generate random number between 20 and 200?
// Grab difference between 200 and 20
// multiply by Math.random();
// Add 20

function randomBetween(min, max) {
  const difference     = max - min;
  const randomFraction = Math.random();
  return 20 + Math.ceil(randomFraction * difference);
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);


// Further Exploration
//
// Question:
// How would using `Math.round` in place of `Math.floor` effect
// the program?
//
// Answer:
// This would break the program, because if the randomly generated number
// was greater than or equal to 200.5, the value would be rounded up to 201,
// thus return a value outside the intended range.
//
// Question:
// How could the function be altered to allow callers to specify min and max
// arguments in any order?
//
// Answer:
// Use a conditional to compare min against max using a comparison operator.
// Swap the variable references if min is greater than max.
