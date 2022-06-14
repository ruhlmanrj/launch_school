// Takes 2 values and return true if exactly 1 of them are true
// and false otherwise.

function isXor(value1, value2) {
  return (!!value1 && !value2) || (!!value2 && !value1);
}

// Should all evaluate to `true`

console.log(isXor(false, true)    === true);
console.log(isXor(true, false)    === true);
console.log(isXor(false, false)   === false);
console.log(isXor(true, true)     === false);


console.log(isXor(false, 3)       === true);
console.log(isXor('a', undefined) === true);
console.log(isXor(null, '')       === false);
console.log(isXor('2', 23)        === false);


// Further Exploration
// Part 1: Does `isXor` perform short-circuit evaluation? Why or why not?
//         Does short-circuit evaluation in XOR operation make sense?
//
// Answer: At the highest level of abstraction, an XOR operation can
//         never be short-circuited. This is because the outcome is dependent
//         on a specific configuration involving BOTH operands in every case.
//
//         As implemented above, there is the potential of a short-circuit.
//         However, in order for a value to be returned, both values from
//         at least one side of the `||` need to be evaluated for a `true`
//         outcome and both expressions on either side of the `||` need to
//         be evaluated for a `false` outcome. So in every possible situation,
//         both arguments are being evaluated.
//
// Part 2: Give an example of a situation where an `XOR` evaluation would be
//         useful.
//
// Answer: - If there were a situation where a computer did not have enough memory
//           to execute two memory intensive applications at the same time; either
//           of the two could be running at a given time, but not both.
