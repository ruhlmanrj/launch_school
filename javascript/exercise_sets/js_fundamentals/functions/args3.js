// What will the following code log to the console and why?

let a = [1, 2, 3];     // `a` is initialized

function myValue(b) {
  b[2] += 7;           // Increments element at index 2 of `b` by 7, destructively.
}

myValue(a);            // Array referenced by `a` is mutated
console.log(a);        // => `[1, 2, 10]`