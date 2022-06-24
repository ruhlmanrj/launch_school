// What will the following code log to the console and why?

// const myObject = {
//   prop1: '123',
//   prop2: '234',
//   'prop 3': '345',
// };

// const prop2 = '456';
// myObject['prop2'] = '456';
// myObject[prop2] = '678';

// console.log(myObject[prop2]); // Will log '678' due to the assignment on line 11
// console.log(myObject.prop2); // Will log '456' due to reassignment on line 10


// Further Exploration
//
// What will be output as a result of the code below and why?

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);          // { funcprop: 'hello, ' }
myObj[myFunc()] = 'world!';
console.log(myObj);          // { funcprop: 'world!' }
                             // Because this is reassignment