// Pertains to how various data types evaluate when used as
// a condition expression.

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {                // `myBoolean` holds `true`
  console.log('Hello');         // 'Hello' is output
}

if (!myString) {                // `myString` holds `'hello'`; condition => `false`
  console.log('World');         // Not executed; no output
}

if (!!myArray) {                // `myArray` points to `[]`; condition => `true`
  console.log('World');         // 'World' is output
}

if (myOtherString || myArray) { // Condition evaluates as '(`false` || `true`)'
  console.log('!');             // '!' is output
}