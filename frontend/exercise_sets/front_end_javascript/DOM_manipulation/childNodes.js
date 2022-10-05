// Takes the id attribute for a DOM element and returns an array of
// counts for its direct children and also their cumulative descendants
// (indirect children).

console.log(childCounts(1));
console.log(childCounts(4));
console.log(childCounts(9));

function childCounts(id) {
  const ancestor = document.getElementById(id);
  const dirChildCount = ancestor.childNodes.length;
  let indChildCount = 0;

  for (const child of ancestor.children) {
    indChildCount += countDescendants(child);
  }

  return [ dirChildCount, indChildCount];
}

function countDescendants(node) {
  let count = -1;
  walk(_ => count++, node);

  return count;
}

function walk(callback, node) {
  callback(node);

  for (const child of node.childNodes) {
    walk(callback, child);
  }
}