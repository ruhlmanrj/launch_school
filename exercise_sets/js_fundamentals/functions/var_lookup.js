// What will the following code log to the console and why?

var myVar = 'This is global'; // Has global scope

function someFunction() {     // Closes over `myVar`
  console.log(myVar);         // `myVar` refers to `'This is global'`
}

someFunction();               // => 'This is global'