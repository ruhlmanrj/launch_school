// Takes a string and returns a boolean value representative of whether
// it is a palindrome.

function isRealPalindrome(string) {
  const letterString = string.replaceAll(/[^a-z0-9]/ig, '');
  return isPalindrome(letterString.toLowerCase());
}

function isPalindrome(string) {
  let reversed = '';
  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed;
  }

  return string === reversed;
}

console.log(isRealPalindrome('madam')          === true);
console.log(isRealPalindrome('Madam')          === true);
console.log(isRealPalindrome("madam i'm adam") === true);
console.log(isRealPalindrome('356653')         === true);
console.log(isRealPalindrome('356a653')        === true);
console.log(isRealPalindrome('123ab321')       === false);
