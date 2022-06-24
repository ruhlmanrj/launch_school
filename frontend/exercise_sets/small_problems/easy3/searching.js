// Takes six numbers as inputs and outputs whether the final number
// was equal to one of the previously entered numbers.

let rlSync = require('readline-sync');

// Obtain the first 5 numbers

const numberPool = [];
const positions  = ['1st', '2nd', '3rd', '4th', '5th']

for (let iteration = 0; iteration <= 4; iteration++) {
  const number = rlSync.question(
    `Enter the ${positions[iteration]} number: `
    );

  numberPool.push(number);
}

const lastNumber  = rlSync.question('\nEnter the last number: ');

const isPrevious  = numberPool.includes(lastNumber);

const arrayString = `[${numberPool.join(', ')}]`;

if (isPrevious) {
  console.log(`The number ${lastNumber} appears in ${arrayString}.`)
} else {
  console.log(`The number ${lastNumber} does not appear in ${arrayString}.`)
}
