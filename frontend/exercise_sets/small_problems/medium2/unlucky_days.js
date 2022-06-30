// Takes a year and returns the number of Friday's that occur on the 13th day
// its months.

function fridayThe13ths(year) {
  const JANUARY = 0;
  const DECEMBER = 11;
  const THIRTEENTH = 13;
  const FRIDAY = 5;

  let count = 0;
  for (let month = JANUARY; month <= DECEMBER; month += 1) {
    const date = new Date(year, month, THIRTEENTH);

    if (date.getDay() === FRIDAY) {
      count += 1;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
