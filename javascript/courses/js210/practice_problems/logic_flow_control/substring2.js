// Takes inputs for string, starting index and ending index and returns
// the substring from starting index up to but not including the ending
// index.

// 'hello'
// length = 5
// indexes 0-4

// IF end is undefined, SET end equal to the string length
// IF start or end are less than 0 or NaN, SET the value to 0
// IF start is greater than end, SWAP their values
// IF start or end are greater than the string length SET its value to the string length
// IF value of start is equal to end, RETURN an empty string

// ITERATE through string from start to end - 1 and ASSEMBLE the substring
// RETURN that substring

let isInvalidArg = value => {
  return (Number.isNaN(value) || typeof value !== 'number' || value < 0);
}

function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }

  if (isInvalidArg(start)) start = 0;
  if (isInvalidArg(end))   end   = 0;

  start = parseInt(start);
  end   = parseInt(end);

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start > string.length) start = string.length;
  if (end > string.length)   end   = string.length;

  if (start === end) return '';

  let substring = ''
  for (let i = start; i < end; i++) {
    substring += string[i];
  }

  return substring;
}

let string = 'hello world';

outcome = substring(string, 2, 4) === 'll';
console.log(outcome)

outcome = substring(string, 4, 2) === 'll';
console.log(outcome)

outcome = substring(string, 0, -1) === '';
console.log(outcome)

outcome = substring(string, 2) === 'llo world';
console.log(outcome)

outcome = substring(string, 'a') === 'hello world';
console.log(outcome)

outcome = substring(string, 8, 20) === 'rld';
console.log(outcome)

outcome = substring(string, NaN, 2) === 'he';
console.log(outcome)

outcome = substring(string, true, 2) === 'he';
console.log(outcome)
