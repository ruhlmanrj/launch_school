// What will the following code log to the console and why?

var myVar = 'This is global';  // `myVar` is declared with `var` and initialized;
                               // Has global scope.

function someFunction() {
  myVar = 'This is local';     // Variable reassignment since a closure is formed and
                               // `myVar` from line 3 is in scope.
}

someFunction();                // `myVar` is reassigned
console.log(myVar);            // => 'This is local'