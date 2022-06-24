// Takes an age as input and outputs a message pertaining to their
// retirement age and year. Implemented for a browser.

const age               = prompt('What is your age? ');
const retirementAge     = prompt('At what age would you like to retire? ');

const yearsToRetirement = retirementAge - age;
const currentYear    = new Date().getFullYear();
const retirementYear = Number(currentYear) + Number(yearsToRetirement);

console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`\nYou only have ${yearsToRetirement} years to go!`);


// Further Exploration
//
// The global `Date` function returns a string representation of
// the date, so the `getFullYear` function would throw an undefined
// method error.
