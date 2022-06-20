// A custom implementation of 'Array.prototype.concat' that takes an arbitrary
// number of arguments (>= 2 in number).

function concat(...args) {
  const concatArray = [];

  for (let argsIndex = 0; argsIndex < args.length; argsIndex++) {
    const arg = args[argsIndex];

    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i++) {
        concatArray.push(arg[i]);
      }
    } else {
      concatArray.push(arg);
    }
  }

  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
