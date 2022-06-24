// Identify the bug in the code below.

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];  // Trying to use an undeclared variable. Will throw ReferenceError.
myObject.a;
