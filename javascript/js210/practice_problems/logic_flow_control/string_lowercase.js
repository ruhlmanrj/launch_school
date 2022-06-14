// Takes a string and returns a string with the same characters but
// all lowercase.

// Note that the implementation was rewritten after viewing the solution

const CONVERSION_OFFSET                = 32;

function toLowerCase(string) {
  let lowerCaseString = '';
  for (let i = 0; i < string.length; i++) {
    let asciiCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      asciiCode += CONVERSION_OFFSET;
    }

    lowerCaseString += String.fromCharCode(asciiCode);
  }

  return lowerCaseString;
}

console.log(toLowerCase('ALPHABET') === 'alphabet');
console.log(toLowerCase('123')      === '123');
console.log(toLowerCase('abcDEF')      === 'abcdef');
