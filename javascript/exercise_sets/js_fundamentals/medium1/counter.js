// What will the following code snippets output?

// Snippet 1:

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

// Answer:
// 'The total value is 15'
//
// Since function declarations are hoisted to the top of their scope,
// the declaration on line 1 is ignored and `counter` is reassigned.
// Therefore `counter` references `5` as opposed to the function.


// Snippet 2:

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// Answer:
// 'The total value is NaN'
//
// This is because function declarations are hoisted above
// all other declarations. Therefore, the `var` declaration to
// `counter` is ignored. Since reassignment does not occur until
// after the message has been logged, `counter` still references
// the function when it is evaluated.


// Snippet 3:

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Answer:
// 'The total value is 15'
//
// Function declarations are hoisted to the top of their scope,
// and this includes the assignment of the variable as well.
// Therefore, the line on which the function is lexically defined
// is inconsequential in this example. `counter` is still reassigned
// on line 1.


// Snippet 4:

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// Answer:
// An error that the variable `counter` has already been declared.
//
// Declaring variables with `let` is only permitted if no such variable
// with the given identifier exists in the block scope where it is used.
//
// In this case, since the function declaration is hoisted, a variable
// with the name 'counter' already exists, thus the declaration on line 1
// is redundant.
