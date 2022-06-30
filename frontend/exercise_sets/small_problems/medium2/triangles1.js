// Takes three numbers representing the three angles of a triangle and returns
// its type.

// - If any angle is <= 0 or the sum is != 180 degrees
//   - Return 'invalid'
// - Else
//   - If any angle is 90 degrees
//     - Return 'right'
//   - If any angle is greater than 90 degrees
//     - Return obtuse
//   - Else
//     - Return acute



function triangle(angle1, angle2, angle3) {
  if (isInvalid(angle1, angle2, angle3)) {
    return 'invalid';
  } else {
    return triangleType(angle1, angle2, angle3);
  }
}

function isInvalid(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  const min = Math.min(angle1, angle2, angle3);

  return min <= 0 || sum != 180;
}

function triangleType(angle1, angle2, angle3) {
  const max = Math.max(angle1, angle2, angle3);
  if (max === 90) {
    return 'right';
  } else if (max > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(5, 170, 10));   // invalid
console.log(triangle(-10, 180, 10)); // invalid
console.log(triangle(90, 45, 45));   // right
console.log(triangle(60, 60, 60));   // acute
console.log(triangle(100, 40, 40));  // obtuse
