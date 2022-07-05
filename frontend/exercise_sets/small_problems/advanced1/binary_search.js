// Takes a sorted array and a search item and returns the item's index using a
// binary search algorithm.

function binarySearch(list, searchItem) {
  let listLength = list.length;
  let minIndex = 0;
  let maxIndex = listLength - 1;

  while (maxIndex >= minIndex && maxIndex >= 0 && maxIndex < listLength) {
    const middleIndex = Math.floor((minIndex + maxIndex) / 2);
    const testItem = list[middleIndex];

    if (testItem === searchItem) {
      return middleIndex;
    } else if (testItem > searchItem) {
      maxIndex = middleIndex - 1;
    } else {
      minIndex = middleIndex + 1;
    }
  }

  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
