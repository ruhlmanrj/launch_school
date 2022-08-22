// Takes the id of an outermost parent node and the id of an innermost child
// node, then returns an array of tag names for all elements in the ancestry
// chain from the innermost child up to and including the outermost parent; or
// undefined if no such chain exists.

function traceToParent(child, lastParentId) {
  const parent = child.parentElement;

  if (child.id === String(lastParentId)) {
    return [child.tagName];
  }

  if (parent.tagName === 'BODY') {
    return undefined;
  }

  const trace = traceToParent(parent, lastParentId);
  if (trace) {
    return [...trace, child.tagName];
  } else {
    return undefined;
  }
}

function sliceTree(startId, endId) {
  if (startId > endId) {
    return undefined;
  }

  const outermostParent = document.getElementById(startId);
  const innermostChild = document.getElementById(endId);

  if (!outermostParent || !innermostChild) {
    return undefined;
  }

  return traceToParent(innermostChild, startId);
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
