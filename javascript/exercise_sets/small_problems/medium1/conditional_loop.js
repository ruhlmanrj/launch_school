// Will the following program inclusively log numbers between 0 and 9?
// Explain your answer.

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// The given implementation will not produce the expected results. This is
// because the condition expression on line 6 will evaluate to true when
// `i` equals 0, and 0 is not a multiple of 3. Also, an infinite loop is
// created since `i` will never be incremented after reaching a value
// that causes the condition expression to be true.
