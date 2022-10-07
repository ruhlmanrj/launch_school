/**
 * Swaps the positions of two elements in the DOM.
 */

 function nodeSwap(idA, idB) {
  const nodeA = document.getElementById(idA);
  const nodeB = document.getElementById(idB);

  if (!nodeA || !nodeB || areAncestors(nodeA, nodeB)) {
    return;
  }

  performSwap(nodeA, nodeB);
}

function areAncestors(nodeA, nodeB) {
  const idSelector = ({ id }) => `[id="${id}"]`;
  const isAncestor = (parent, child) => !!child.closest(idSelector(parent));

  return isAncestor(nodeA, nodeB) || isAncestor(nodeB, nodeA)
}

function performSwap(nodeA, nodeB) {
  const placehold = document.createElement('div');
  nodeB.replaceWith(placehold);

  nodeA.replaceWith(nodeB);
  placehold.replaceWith(nodeA);
}
