// Takes a floating point number representing an angle between 0 and 360
// degrees and returns a string representing that angle in degrees, minutes,
// and seconds.

const DEGREE = '\u00B0'
const DEGREES_PER_CIRCLE = 360;
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(degrees) {
  degrees = normalizeDegrees(degrees);

  const wholeDegrees = Math.floor(degrees);
  const minutes      = (degrees - wholeDegrees) * MINUTES_PER_DEGREE;

  let wholeMinutes   = Math.floor(minutes);
  const seconds      = (minutes - wholeMinutes) * SECONDS_PER_MINUTE;
  let wholeSeconds   = Math.round(seconds);

  wholeMinutes = padWithZero(wholeMinutes);
  wholeSeconds = padWithZero(wholeSeconds);

  return `${wholeDegrees}${DEGREE}${wholeMinutes}'${wholeSeconds}"`
}

function normalizeDegrees(degrees) {
  const remainder = degrees % DEGREES_PER_CIRCLE;

  if (remainder < 0) {
    return remainder + 360;
  } else if (Math.abs(remainder) === 0) {
    return 0;
  } else {
    return remainder;
  }
}

function padWithZero(number) {
  const numString = String(number);
  return numString.length === 1 ? `0${numString}` : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-480))          // 240°00'00"
