// Takes two strings of different lengths and returns a new string.
// The new string will consist of the shorter string + longer string +
// shorter string.

function shortLongShort(string1, string2) {
  let short;
  let long;

  if (string1.length < string2.length) {
    [short, long] = [string1, string2];
  } else {
    [long, short] = [string1, string2];
  }

  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh') === 'abcdefghabc');
console.log(shortLongShort('abcde', 'fgh') === 'fghabcdefgh');
console.log(shortLongShort('', 'xyz')      === 'xyz');
