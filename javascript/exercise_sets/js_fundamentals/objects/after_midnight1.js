// Using the `Date` object, write a program that takes a number
// of minutes before or after midnight and return the 24-hour format
// string for that time.

const SECONDS_PER_MINUTE = 60
const MILLISECONDS_PER_SECOND = 1000

function timeOfDay(deltaMinutes) {
  const deltaTime = deltaMinutes * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND
  const date = new Date(2022, 5, 19, 0, 0, 0, deltaTime);

  let hours = padWithZero(date.getHours());
  let minutes = padWithZero(date.getMinutes());

  return `${hours}:${minutes}`
}

function padWithZero(number) {
  return String(number).length === 1 ? `0${number}` : number
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
