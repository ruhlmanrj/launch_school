// What will the following code log to the console and why? 

logValue();                      // Logs => 'Hello, world!'

function logValue() {            // Hoisted and available for calling
  console.log('Hello, world!');
}

// --- Further Exploration ---
// What will the following code log to the console and why? 

var logValue = 'foo';            // `logValue` is reassigned, since this becomes
                                 //  a redundant declaration.

function logValue() {            // Hoisted above variable from line 12; serves
                                 // as the lone declaration in this program.
  console.log('Hello, world!');
}

console.log(typeof logValue);    // `typeof logValue` => `'string'`