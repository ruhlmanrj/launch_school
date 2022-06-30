// Takes 3 numbers representing the lengths of the sides of a triangle and
// returns a string indicating its type.

// - Validate that all sides are greater thatn zero and the shortest
//   two sides are longer than the longest side
// - If all sides are equal, the triangle is equilateral
// - If first side is equal to one of second 2 sides or
//   second side is euql to third side
//     - the triangle is 'isosceles'
// - Else it is scalen

// After sort, if smallest side is 0, arr[0], invalid
// Invalid if sides[0] + sides[1] <= sides[3];
function triangle(side1, side2, side3) {
  let sorted = sortedSides(side1, side2, side3);

  if (sorted[0] <= 0 || (sorted[0] + sorted[1] <= sorted[2])) {
    return 'invalid';
  }

  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function sortedSides(...sides) {
  return sides.sort((first, second) => first - second);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
