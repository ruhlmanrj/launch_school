// Prompts a user for a password and obtains input. The input is validated and
// an applicable message is output.

const rlSync                 = require('readline-sync');
const PASSWORD               = 'password';
const ATTEMPTS_ALLOWED_COUNT = 3;

let attemptCount = 0;
do {
  var guess = rlSync.question('>> What is the password? (attempt ' +
                               `${attemptCount + 1} of ` +
                               `${ATTEMPTS_ALLOWED_COUNT}): `);
  if (guess === PASSWORD) break;

  console.clear();
  console.log('>> The password you entered was incorrect.');

  attemptCount += 1;
} while (attemptCount < ATTEMPTS_ALLOWED_COUNT);

console.clear();

if (guess === PASSWORD) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access.');
}
