// Takes a name and creates function capable of doubling a number that
// also logs the value of the name.

function makeDoubler(caller) {
  return function (number) {
    console.log(`This function was called by ${caller}`);
    return number * 2;
  };
}

let doubler = makeDoubler('Robert'); // => 'doubler' function
console.log(doubler(10));            // outputs 20
