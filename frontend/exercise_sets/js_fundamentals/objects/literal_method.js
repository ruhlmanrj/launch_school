// What is the result of the final line in the following code?

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// Since neither function was invoked within the template literal,
// the expressions are returning the function objects themselves, which
// will result in the string representation of a function being interpolated
// within the string.
