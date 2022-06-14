// Takes a string and concatenates 'n' copies of itself end-to-end,
// where 'n' is a specified integer.

function repeat(string, nTimes) {
  if (typeof nTimes !== 'number' || nTimes < 0) {
    return undefined;
  } else if (nTimes === 0) {
    return '';
  }

  while (nTimes > 0) {
    string += string;
    nTimes--;
  }

  return string;
}

console.log(repeat('abc', 1)     === 'abc');
console.log(repeat('abc', 2)     === 'abcabc');
console.log(repeat('abc', -1)    === undefined)
console.log(repeat('abc', 0)     === '');
console.log(repeat('abc', 'a')   === undefined);
console.log(repeat('abc', false) === undefined);
console.log(repeat('abc', null)  === undefined);
console.log(repeat('abc', '  ')  === undefined);
