// Takes the `id` of a DOM element node and returns a two-dimensional array
// representing the DOM tree from the level of that element upwards.

function domTreeTracer(id) {
  const siblingGroups = [];

  let currentElement = document.getElementById(id);
  while (currentElement.id !== '1') {
    const parent = currentElement.parentElement;
    const sibNames = [...parent.children].map(({ nodeName }) => nodeName);
    siblingGroups.push(sibNames);

    currentElement = parent;
  }
  siblingGroups.push([currentElement.nodeName]);

  return siblingGroups;
}

console.log(domTreeTracer(1));
console.log(domTreeTracer(2));
console.log(domTreeTracer(22));
