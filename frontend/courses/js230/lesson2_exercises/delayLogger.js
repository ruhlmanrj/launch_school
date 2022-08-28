// Logs a range of numbers from 1 to a specified final number. It logs each
// after delaying a number of seconds equal to the number.

function delayLogNumbersTo(lastNum) {
  const MILLISECONDS_PER_SECOND = 1000;

  for (let num = 1; num <= lastNum; num++) {
    const milliseconds = num * MILLISECONDS_PER_SECOND;
    const logNum = () => console.log(num);

    setTimeout(logNum, milliseconds);
  }
}
