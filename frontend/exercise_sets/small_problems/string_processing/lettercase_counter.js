// Takes a string and returns an object with case count data regarding its characters.

function letterCaseCount(string) {
  const counts = { lowercase: 0, uppercase: 0, neither: 0 }
  const chars = string.split('');

  chars.forEach(char => {
    if (/[a-z]/.test(char)) {
      counts.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1
    }
  });

  return counts;
}

console.log(
  letterCaseCount('abCdef 123')  // { lowercase: 5, uppercase: 1, neither: 4 }
);
console.log(
  letterCaseCount('AbCd +Ef')    // { lowercase: 3, uppercase: 3, neither: 2 }
);
console.log(
  letterCaseCount('123')         // { lowercase: 0, uppercase: 0, neither: 3 }
);
console.log(
  letterCaseCount('')            // { lowercase: 0, uppercase: 0, neither: 0 }
);
