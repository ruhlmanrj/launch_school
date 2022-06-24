// Takes an integer representing a year and returns a boolean value
// indicating whether it is a leap year.

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016)   === true);
console.log(isLeapYear(2015)   === false);
console.log(isLeapYear(2100)   === false);
console.log(isLeapYear(2400)   === true);
console.log(isLeapYear(24000)  === true);

console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000)   === true);
console.log(isLeapYear(1900)   === false);
console.log(isLeapYear(1752)   === true);
console.log(isLeapYear(1700)   === false);

console.log(isLeapYear(1)      === false);
console.log(isLeapYear(100)    === false);
console.log(isLeapYear(400)    === true);


// Further Exploration
//
// Rewrite the implementation to reverse the order in which the conditions
// are checked.

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

// In my opinion, this solution is more verbose and less intuitive than
// the previous one.
