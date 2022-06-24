// Takes an integer representing a year and returns a boolean value
// indicating whether it is a leap year. Takes into account the difference
// in what consituted a leap year before and after 1752.

function isLeapYear(year) {
  if (year < 1752) {
    return year % 4 === 0;
  } else if (year % 400 === 0) {
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
console.log(isLeapYear(240000) === true);
console.log(isLeapYear(240001) === false);
console.log(isLeapYear(2000)   === true);
console.log(isLeapYear(1900)   === false);
console.log(isLeapYear(1752)   === true);
console.log(isLeapYear(1700)   === true);
console.log(isLeapYear(1)      === false);
console.log(isLeapYear(100)    === true);
console.log(isLeapYear(400)    === true);

// Further Exploration
//
// How was the switch from the Julian to Gregorian calenar system handled
// in your ancestral lands?

// In the U.S., 11 days were dropped from the calendar in September of 1752.
// Its interesting to think about what it might have been like to experience
// such a change; I wonder how it felt for the people who had their birthdays
// skipped!
