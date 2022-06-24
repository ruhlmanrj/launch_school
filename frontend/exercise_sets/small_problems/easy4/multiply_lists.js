// Takes two arrays with numbers and returns an array with the product
// of each pair of numbers at matching indexes within the first two arrays.

function multiplyList(list1, list2) {
  return list1.map((number, index) => {
    number * list2[index]
  });
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
