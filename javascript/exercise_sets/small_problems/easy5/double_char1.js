// Take a string and returns a new string with every character duplicated.

function repeater(string) {
  let doubled = '';
  for (let char of string) {
    doubled += (char + char);
  }

  return doubled;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
