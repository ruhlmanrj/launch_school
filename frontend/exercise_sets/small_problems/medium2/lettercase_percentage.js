// Takes a string and returns an object with percentages of:
// 1) Uppercase letters
// 2) Lowercase letters
// 3) Characters that are neither of the above

// Use regexes to match string and use array counts for totals
// If no array returned, total is 0
// Calculate percentage for each and include as part of return
// object

function letterPercentages(string) {
  const length = string.length;

  const parseLower = /[a-z]/g;
  const parseUpper = /[A-Z]/g;

  const lowerCount = string.match(parseLower)?.length || 0;
  const upperCount = string.match(parseUpper)?.length || 0;
  const neitherCount = length - (upperCount + lowerCount);

  return {
    lowercase: toPercentString(lowerCount, length),
    uppercase: toPercentString(upperCount, length),
    neither: toPercentString(neitherCount, length),
  };
}

function toPercentString(count, outOf) {
  return (count / outOf * 100).toFixed(2);
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
