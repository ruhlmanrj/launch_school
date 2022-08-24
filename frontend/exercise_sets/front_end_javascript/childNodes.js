// Takes the id attribute value for a DOM element and returns an array of
// counts for its direct children and also their cumulative descendants
// (indirect children of parent).

function walkElements(elementNode, callback) {
  callback(elementNode);

  [...elementNode.children].forEach(child => {
    walkElements(child, callback);
  });
}

function childNodes(parentId) {
  const parent = document.getElementById(parentId);
  const directCount = parent.childNodes.length;

  let indirectCount = 0;
  const countChildNodes = ({ childNodes }) => {
    indirectCount += childNodes.length;
  };

  [...parent.children].forEach(child => {
    walkElements(child, countChildNodes);
  });

  return [ directCount, indirectCount ];
}

console.log(childNodes(1)); // [9, 12];