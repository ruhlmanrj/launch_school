// Takes a string and returns a new string with all consonant letters
// duplicated.

const CONSONANT_PATTERN = /[b-df-hj-np-tv-z]/ig

function doubleConsonants(string) {
  let doubled = '';

  for (let char of string) {
    if (CONSONANT_PATTERN.test(char)) {
      doubled += (char + char);
    } else {
      doubled += char;
    }
  }

  return doubled;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
