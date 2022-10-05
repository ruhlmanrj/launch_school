/**
 * Takes an array representing a DOM tree starting with a body node element and
 * creates the DOM tree it represents.
 */

function arrayToNodes(childrenData, parent = document.body) {
  if (childrenData[0] === 'BODY') {
    childrenData = childrenData[1];
  }

  childrenData.forEach(([ tagName, grandChildren ]) => {
    const childElement = document.createElement(tagName);
    parent.appendChild(childElement);
    arrayToNodes(grandChildren, childElement);
  });
}
