// What will the following code log to the console and why? 

console.log(a); // => `undefined` since `var` declarations reference `undefined`
                // until explicit assignment occurs

var a = 1;      // Hoisted and scoped globally