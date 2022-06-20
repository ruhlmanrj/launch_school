// Takes a string representation of a 24-hour formatted time and returns
// the number of minutes before or after midnight.

// After midnight
// Take the time string and use it to create a date object
// with the specified timestamp
//
// Create a second date object with the same day, but timestamp of 00:00
//
// Subtract the time in milliseconds of the first date object from
// the second date object and convert to minutes

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_DAY         = 1440

function afterMidnight(hoursMinutes) {
  const dateAfter  = new Date(`1/1/2000 ${hoursMinutes}`);
  const dateBefore = new Date('1/1/2000');

  return (dateAfter.getTime() - dateBefore.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(hoursMinutes) {
  return (MINUTES_PER_DAY - afterMidnight(hoursMinutes)) % MINUTES_PER_DAY;
}

console.log(afterMidnight('00:00'));
console.log(afterMidnight('12:34'));
console.log(beforeMidnight('00:00'));
console.log(beforeMidnight('12:34'));
