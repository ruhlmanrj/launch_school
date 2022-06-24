// Takes a strings and returns all substrings that are palindromic.

function palindromes(string) {
  return getSubstrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return (string.length > 1) &&
    (string === string.split('').reverse().join(''));
}

function getSubstrings(string) {
  return string.split('')
               .reduce((result, _, index) => {
                const substring = string.slice(index);
                const substrings = leadingSubstrings(substring);
                return result.concat(substrings);
               }, []);
}

function leadingSubstrings(string) {
  const chars = string.split('');
  return chars.map((_, index) => chars.slice(0, index + 1)
                                      .join(''));
}


console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
