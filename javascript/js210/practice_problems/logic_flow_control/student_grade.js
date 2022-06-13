// Outputs messages to a user prompting for test scores. Calculates the mean
// of the scores and outputs a message with the applicable letter grade.

// Score Ranges mapped to Grades:
//
// Score            Grade
// ----------------------
// (>= 90)            A
// (>= 70 AND < 90)   B
// (>= 50 AND < 70)   C
// (< 50)             F

const rlSync = require('readline-sync');

function obtainScores() {
  let count  = 0;
  let scores = [];

  while (count < 3) {
    let score = rlSync.question(`Enter score ${count + 1}: `);

    scores.push(Number(score));
    count += 1
  }

  return scores;
}

function scoreToGrade(score) {
  if (score >= 90)  return 'A';
  if (score >= 70)  return 'B';
  if (score >= 50)  return 'C';
                    return 'F';
}

let scores = obtainScores();
let mean   = scores.reduce((total, score) => total + score) / 3;
let grade  = scoreToGrade(mean);
console.log(`Based on the average of your 3 scores your letter ` +
            `grade is ${grade}.`);


// Further Exploration
// Modify the program to accept any number of scores.

const rlSync = require('readline-sync');

function obtainScores() {
  let scores = [];
  let count = 1
  let again;

  do {
    let score = rlSync.question(`Enter score ${count}: `);
    scores.push(Number(score));
    count += 1

    again = rlSync.question('Is there another score? (y/n): ')
    again = /(y|yes)/i.test(again);

    console.clear();
  } while (again)

  return scores;
}

function scoreToGrade(score) {
  if (score >= 90)  return 'A';
  if (score >= 70)  return 'B';
  if (score >= 50)  return 'C';
                    return 'F';
}

let scores = obtainScores();
let mean   = scores.reduce((total, score) => total + score) / 3;
let grade  = scoreToGrade(mean);
console.log(`Based on the average of your 3 scores your letter ` +
            `grade is ${grade}.`);
