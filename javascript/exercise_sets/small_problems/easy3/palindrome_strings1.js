// Takes a string and returns a boolean value representative of whether
// it is a palindrome.

function isPalindrome(string) {
  let reversed = '';
  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed;
  }

  return string === reversed;
}

console.log(isPalindrome('madam')          === true);
console.log(isPalindrome('Madam')          === false);
console.log(isPalindrome("madam i'm adam") === false);
console.log(isPalindrome('356653')         === true);
