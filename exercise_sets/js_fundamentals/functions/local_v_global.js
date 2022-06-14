// What will the following code log to the console and why?

var myVar = 'This is global';  // `myVar` is declared with `var` and initialized;
                               // Scoped globally and refers to `''This is global`

function someFunction() {      // `someFunction()` is declared; scoped globally;
  var myVar = 'This is local'; // `myVar` is declared with `var`; Scoped at the function
                               // level; shadows variable from line 3
}

someFunction();                // Has no meaningful effect on the program; `myVar` within
                               // is lost when function returns.
console.log(myVar);            // Logs 'This is global' since `myVar` from line 3 is
                               // the only globally scoped variable with that identifier.