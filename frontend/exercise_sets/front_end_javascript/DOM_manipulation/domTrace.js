// Takes the `id` of a DOM element node and returns a two-dimensional array
// representing the DOM tree from the level of that element upwards.

function tagNames(collection) {
  return [...collection].map(({ tagName }) => tagName);
}

function domTreeTracer(id) {
  const GRANDEST = '1';

  const trace = node => {
    const sibs = node.parentNode.children;
    const tags = tagNames(sibs);
  
    if (node.id === GRANDEST) { return [ tags ]; }
  
    return [ tags ].concat(trace(node.parentNode))
  }

  const node = document.getElementById(id);
  return trace(node);
}


console.log(domTreeTracer(1));
console.log(domTreeTracer(2));
console.log(domTreeTracer(22));
