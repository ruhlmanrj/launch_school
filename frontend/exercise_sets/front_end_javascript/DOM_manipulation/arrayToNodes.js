/**
 * Takes an array representing a DOM tree starting with a body node element and
 * creates the DOM tree it represents.
 */

 function arrayToNodes([ tagName, childArrays ]) {
  const parent = document.createElement(tagName);

  for (const array of childArrays) {
    parent.appendChild(arrayToNodes(array));
  }

  return parent;
}
