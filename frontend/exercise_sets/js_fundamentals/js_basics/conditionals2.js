// Pertains to identifying the different control flow paths
// that could be taken for a conditional statement.

// Code only shown for reference
if (condition1) {
  if (condition2) {
                       // Path 1: Conditions on lines 5 and 6 are truthy.
  } else {
                       // Path 2: Condition on line 5 is truthy but line 7 is falsey
  }
} else {
                       // Path 3: Condition on line 5 is falsey and condition on line
                       //         14 is falsey.
  if (condition4) {
                       // Path 4: Condition on line 5 is falsey, condition on line
                       //         14 is truthy, and condition on line 17 is falsey.
    if (condition5) {
                       // Path 5: Same as path 5, except condition on line 17
                       //         is truthy.
    }
  }
}