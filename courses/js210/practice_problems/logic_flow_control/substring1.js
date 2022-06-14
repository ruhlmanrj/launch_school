// Takes a string, starting index, and length and returns the
// corresponding substring.

function substr(string, start, length) {
  if (length <= 0) return '';

  if (start <= 0) {
    start = string.length + start;
  }

  let substring = '';
  for (let i = start; i < string.length; i++) {
    substring += string[i];

    if (substring.length === length) break;
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4)   === 'llo ');
console.log(substr(string, -3, 2)  === 'rl');
console.log(substr(string, 8, 20)  === 'rld');
console.log(substr(string, 0, -20) === '');
console.log(substr(string, 0, 0)   === '');
