// Given a bill amount and tip percentage, calculates the tip amount
// and ultimate total, displaying both.

const rlSync = require('readline-sync');

let billAmount = rlSync.question('Enter the bill amount: ');
let tipPercent = rlSync.question('Enter the tip percentage: ');

billAmount = parseFloat(billAmount).toFixed(2);
tipPercent = parseInt(tipPercent);

let tipAmount  = (billAmount * tipPercent / 100).toFixed(2);
let total      = (Number(billAmount) + Number(tipAmount)).toFixed(2);

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${total}`);
