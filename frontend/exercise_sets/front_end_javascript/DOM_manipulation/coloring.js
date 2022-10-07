// Obtains the html element nodes representing a generation and adds a class
// attribute value to each of them. The first generation is considered to be
// the children of the `document.body`.

function colorGen(level, genCurrent = document.body.children) {
  if (level < 1 || genCurrent.length === 0) {
    return;
  }

  if (level === 1) {
    addColorClass(genCurrent);
    return;
  }

  const genNext = getGenNext(genCurrent);
  colorGen(level - 1, genNext)
}

function addColorClass(nodes) {
  const COLOR = 'generation-color';

  for (const node of nodes) {
    node.classList.add(COLOR);
  }
}

function getGenNext(genPrev) {
  const genNext = [];

  for (const child of genPrev) {
    genNext.push(...child.children);
  }

  return genNext;
}
