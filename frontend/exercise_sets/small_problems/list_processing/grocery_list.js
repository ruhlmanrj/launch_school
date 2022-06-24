// Takes a two-dimensional array representing a grocery list and returns a one
// dimensional array with items appearing a number of times equal to their
// counts in the original array.

function buyFruit(list) {
  return list.map(multiplyItem).flat();
}

function multiplyItem([item, count]) {
  const items = [];
  for (let i = 0; i < count; i += 1) {
    items.push(item);
  }

  return items;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
