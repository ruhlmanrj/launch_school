// Takes the id of an outermost parent node and the id of an innermost child
// node, then returns an array of tag names for all elements in the ancestry
// chain from the innermost child up to and including the outermost parent; or
// undefined if no such chain exists.

function sliceTree(start, end) {
  const nodeStart = document.getElementById(start);
  const nodeEnd = document.getElementById(end);

  const isNotAncestor = !nodeEnd.closest(`[id="${start}"]`);
  if (!nodeStart || !nodeEnd || start > end || isNotAncestor) {
    return;
  }

  const nodes = [];
  let node = nodeEnd;

  do {
    nodes.push(node.tagName);
    node = node.parentNode;
  } while (+node.id >= start)

  return nodes.reverse();
}

console.log(sliceTree(1, 4));
// ["ARTICLE", "HEADER", "SPAN", "A"]
console.log(sliceTree(1, 76));
// undefined
console.log(sliceTree(2, 5));
// undefined
console.log(sliceTree(5, 4));
// undefined
console.log(sliceTree(1, 23));
// ["ARTICLE", "FOOTER"]
console.log(sliceTree(1, 22));
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
console.log(sliceTree(11, 19));
// ["SECTION", "P", "SPAN", "STRONG", "A"]
