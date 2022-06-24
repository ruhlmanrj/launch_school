// Takes a string and returns a list of all substrings.

function substrings(string) {
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

console.log(substrings('abcde'));
