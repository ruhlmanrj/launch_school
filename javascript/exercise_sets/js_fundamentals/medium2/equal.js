// The following code does not log the expected result. Explain why this
// happens and then refactor the code so it works as intended.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// The problem here is that the strict equality operator only returns
// true when both operands are objects if they are the same object
// (held in the same memory location). In the above snippet, the constants
// initialized on lines 4 and 5 are assigned different objects, thus the
// expression on line 7 evaluates to false.
//
// To fix the problem, the second constant needs to be assigned a reference
// to the same object as person. We can do this by assigning `otherPerson` to
// `person, like so:

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // false -- expected: true
