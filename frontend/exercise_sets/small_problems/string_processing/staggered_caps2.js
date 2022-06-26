// Takes a string and returns the string with the case of each character staggered.

function staggeredCase(string) {
  let nextCharisUpperCase = true;

  return string.split('').map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else if (nextCharisUpperCase) {
      nextCharisUpperCase = false;
      return char.toUpperCase();
    } else {
      nextCharisUpperCase = true;
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
