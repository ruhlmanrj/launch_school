// Takes an array and outputs the number of occurrences of each element within.

// - Init object
// - Iterate through array and add element key with value 1
//   if it does not exist
// - If it does exist increment its value by 1
// - Iterate through the object and output keys and values formatted

function countOccurrences(array) {
  const counts = {};
  array.forEach(element => {
    counts[element] ||= 0;
    counts[element] += 1;
  });

  for (let key in counts) {
    console.log(`${key} => ${counts[key]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
