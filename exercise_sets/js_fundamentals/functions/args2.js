// What will the following code log to the console and why?

let a = 7;             // `a` is assigned 7; has global scope

function myValue(a) {
  a += 10;             // Modifies a local variable that will be lost when
                       // the function returns
}

myValue(a);            // Value of `a` from line 3 is shadowed by `a` within the
                       // function.
console.log(a);        // Logs '7' since `a` from line 3 has not been modified.