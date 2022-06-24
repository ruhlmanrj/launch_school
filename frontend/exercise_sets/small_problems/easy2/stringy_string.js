// Takes an integer and returns a string consisting of alternating 1s and 0s
// of length equal to the integer.

const stringy = (length) => {
  const firstChar = '1';
  const nextChar = (firstChar === '1' ? '0' : '1');

  let string = '';
  for (i = 0; i < length; i++) {
    if (i % 2 === 0) {
      string += firstChar;
    } else {
      string += nextChar;
    }
  }

  return string;
};

console.log(stringy(6) === '101010');
console.log(stringy(9) === '101010101');
console.log(stringy(4) === '1010');
console.log(stringy(7) === '1010101');
