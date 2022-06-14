// Takes a string and strips leading and trailing whitespace.

function trim(untrimmedString) {
  let firstNonSpaceIndex = null;
  for (let i = 0; i < untrimmedString.length; i++) {
    if (untrimmedString[i] !== ' ') {
      firstNonSpaceIndex = Number(i);
      break;
    }
  }

  if (firstNonSpaceIndex === null) return '';

  let lastNonSpaceIndex = null
  for (let i = untrimmedString.length - 1; i >= 0; i--) {
    if (untrimmedString[i] !== ' ') {
      lastNonSpaceIndex = Number(i);
      break;
    }
  }

  let trimmedString = ''
  for (let i = firstNonSpaceIndex; i <= lastNonSpaceIndex; i++) {
    trimmedString += untrimmedString[i];
  }

  return trimmedString;
}

console.log(trim('  abc  ')  === 'abc');
console.log(trim('abc   ')   === 'abc');
console.log(trim(' ab c')    === 'ab c');
console.log(trim(' a b  c')  === 'a b  c');
console.log(trim('     ')    === '');
console.log(trim('')         === '');
