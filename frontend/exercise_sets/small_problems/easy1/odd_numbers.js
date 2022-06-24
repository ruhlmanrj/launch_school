// Outputs odd numbers from 1 to 99, inclusively.

for (counter = 1; counter <= 99; counter++) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
}


// Further Exploration
//
// Write another solution using an alternative implementation.
// Add functionality for a user to specify the limits for numbers
// output.

const rlSync = require('readline-sync');

let start = Number(rlSync.question('Choose a starting number: '));
let end   = Number(rlSync.question('Choose a ending number: '));

let counter = start;
while (counter <= end) {
  let isOdd = Math.abs(counter % 2) === 1;
  if (isOdd) {
    console.log(counter);
  }

  counter++
}
