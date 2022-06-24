// Takes 3 integers representing test scores, calculates their mean,
// and returns the applicable letter grade.

function getGrade(...scores) {
  const sum  = scores.reduce((total, score) => total + score);
  const mean = sum / scores.length;

  if (mean >= 90 && mean <= 100) {
    return 'A';
  } else if (mean >= 80 && mean < 90) {
    return 'B';
  } else if (mean >= 70 && mean < 80) {
    return 'C';
  } else if (mean >= 60 && mean < 70) {
    return 'D';
  } else if (mean >= 0 && mean < 60) {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93) === 'A');
console.log(getGrade(50, 50, 95) === 'D');
console.log(getGrade(50, 50, 50) === 'F');
