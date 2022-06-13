// What will the following code log to the console and why?

let a = 7;             // `a` is assigned 7; has global scope

function myValue(b) {
  b += 10;             // Modifies a local variable that will be lost when
                       // the function returns
}

myValue(a);            // Value of `a` will be assigned to `b` within function;
                       // `a` still refers to `7`
console.log(a);        // Logs '7'