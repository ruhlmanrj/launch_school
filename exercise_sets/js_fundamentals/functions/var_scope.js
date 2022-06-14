// What will the following code log to the console and why?

function someFunction() {
  myVar = 'This is global';   // `myVar` will be initialized with global scope.
}

someFunction();               // `myVar` is initialized
console.log(myVar);           // Logs 'This is global'