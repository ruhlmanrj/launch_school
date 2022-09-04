// Takes an arbitrary number of callbacks and executes them asynchronously at
// random intervals while also logging the elapsed time.

const MILLISECONDS_PER_SECOND = 1000;
const toMilliseconds = seconds => seconds * MILLISECONDS_PER_SECOND;

function asyncLogSeconds(totalSeconds) {
  for (let i = 1; i <= totalSeconds; i++) {
    setTimeout(console.log, toMilliseconds(i), i);
  }
}

function randomizer(...callbacks) {
  const totalSeconds = callbacks.length * 2;

  asyncLogSeconds(totalSeconds)

  callbacks.forEach(callback => {
    const executeTime = Math.random() * totalSeconds;
    setTimeout(callback, toMilliseconds(executeTime));
  });
}
