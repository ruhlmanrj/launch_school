// What will the following code log to the console and why?

var myVar = 'This is global';  // `myVar` declared with `var` and inititalized;
                               // Scoped globally.

function someFunction() {
  var myVar = 'This is local'; // `myVar` declared with `var` and intiialized;
                               // Shadows variable from line 3; has function scope.
  console.log(myVar);          // Will log value of `myVar` from line 7
}

someFunction();                // Logs 'This is local'; refer to comments on lines 7-9