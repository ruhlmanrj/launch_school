// Takes two arrays and returns an array with their values combined
// in alternation.

function interleave(array1, array2) {
  const interleaved = [];
  const combinedLength =  array1.length + array2.length;

  for (let i = 0; i < combinedLength; i++) {
    if (i % 2 === 0) {
      interleaved.push(array1.shift());
    } else {
      interleaved.push(array2.shift());
    }
  }

  return interleaved;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
// [1, "a", 2, "b", 3, "c"]