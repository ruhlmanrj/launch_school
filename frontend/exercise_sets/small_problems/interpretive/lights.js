// Takes an integer representing a number of switches starting in the off
// position and returns an array of switches in the on position after
// toggling the switches a number of times equal to the number of
// switches.

'strict mode';

function lightsOn(switchCount) {
  const switches = initializeSwitches(switchCount);
  for (let pass = 1; pass <= switchCount; pass += 1) {
    toggleSwitches(switches, pass);
  }

  return onPositions(switches);
}

function initializeSwitches(count) {
  const entries = Array.from(Array(count), (_, i) => [i + 1, false]);
  return Object.fromEntries(entries);
}

function toggleSwitches(switches, pass) {
  for (let position in switches) {
    if (Number(position) % pass === 0) {
      switches[position] = !switches[position];
}
  }
}

function onPositions(switches) {
  return Object.keys(switches).filter(position => switches[position])
                              .map(Number);
}

console.log(lightsOn(1));         // [1]
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
