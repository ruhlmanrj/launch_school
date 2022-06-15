// // Prompts for the length and width of a room in meters and uses the
// // corollary input calculate and output the area (in both meters and feet).

const rlSync = require('readline-sync');
const SQFEET_PER_SQMETER = 10.7639;

let length = rlSync.question('Enter the length of th eroom in meters:\n');
let width  = rlSync.question('Enter the width of the room in meters:\n');

let areaInMeters = (length * width).toFixed(2);
let areaInFeet   = (area_in_meters * SQFEET_PER_SQMETER).toFixed(2);

console.log(
  `The area of the room is ${areaInMeters} meters ` +
  `(${areaInFeet}) square feet).`
);


// Further Exploration

// Implement the program such that the user is asked for the unit type
// prior to performing the calculations and displaying the output.

const rlSync = require('readline-sync');
const SQFEET_PER_SQMETER = 10.7639;

let specUnitType;
while (true) {
  specUnitType = rlSync.question('Will you be using meters or feet? [m/f]: ')

  if (/(f|feet)/i.test(specUnitType)) {
    specUnitType = 'feet';
    break;
  } else if (/(m|meters)/i.test(specUnitType)) {
    specUnitType = 'meters';
    break;
  } else {
    console.clear();
    console.log('Your choice was invalid. You must choose meters or feet.');
  }
}
console.clear();

let length = rlSync.question(`Enter the length of the room: `);
let width  = rlSync.question(`Enter the width of the room: `);

let specUnitArea = (length * width).toFixed(2);
let otherArea;
let otherUnitType;

if (specUnitType === 'meters') {
  otherArea     = (specUnitArea * SQFEET_PER_SQMETER).toFixed(2);
  otherUnitType = 'feet'
} else {
  otherArea     = (specUnitArea / SQFEET_PER_SQMETER).toFixed(2);
  otherUnitType = 'meters'
}

console.log(
  `The area of the room is ${specUnitArea} square ${specUnitType} ` +
  `(${otherArea} square ${otherUnitType}).`
);
