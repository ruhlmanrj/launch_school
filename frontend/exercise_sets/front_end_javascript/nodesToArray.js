// Takes a DOM element node and returns an array representing the DOM tree
// for that element node and its descendants.

function nodesToArr(node = document.body) {
  const childElements = [...node.children].map(nodesToArr);

  return [
    node.tagName,
    childElements,
  ];
}
