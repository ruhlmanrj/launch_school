// Takes 2 arrays and returns an array containing the union of their values.

function union(array1, array2) {
  const result = [];
  const combined = array1.concat(array2);

  combined.forEach(value => {
    if (!result.includes(value)) {
      result.push(value);
    }
  });

  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));
