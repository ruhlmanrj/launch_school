/**
 * Swaps the positions of two elements in the DOM. Uses `sliceTree` function
 * from sliceTree.js to ascertain whether parent-child relationship exists
 * between elements.
 */

const nodeSwap = (() => {
  const nodesArevalid = (ancestor, child) => {
    return ancestor && child && !ancestor.contains(child);
   }
  
  const swapNodes = (node1, node2) => {
    const placeholder = document.createElement('p');
  
    node1.replaceWith(placeholder);
    node2.replaceWith(node1);
    placeholder.replaceWith(node2);
  }

  return function (idA, idB) {
    [smallerId, largerId] = [idA, idB].map(Number).sort();
  
    const ancestor = document.getElementById(String(smallerId));
    const child = document.getElementById(String(largerId));
  
    if (nodesArevalid(ancestor, child)) {
      swapNodes(ancestor, child);
      return true;
    }
  }
})();
