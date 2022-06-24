// Takes a string an returns an array of leading substrings.

function leadingSubstrings(string) {
  const chars = string.split('');
  return chars.map((_, index) => chars.slice(0, index + 1)
                                      .join(''));
}

console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]

console.log(leadingSubstrings('xyzzy'));
// ["x", "xy", "xyz", "xyzz", "xyzzy"]
