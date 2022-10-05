// Obtains the html element nodes representing a generation and adds a class
// attribute value to each of them. The first generation is considered to be
// the children of the `document.body`.

// function colorGeneration(genNum) {
//   if (genNum <= 0) {
//     return;
//   }

//   const ATTRIBUTE_VALUE = 'generation-color';

//   const gen = getGeneration(genNum);
//   gen.forEach(({ classList }) => classList.add(ATTRIBUTE_VALUE));
// }

// function getGeneration(genNum, currentGen = [...document.body.children]) {
//   if (currentGen.length === 0) {
//     return [];
//   }

//   if (genNum === 1) {
//     return currentGen;
//   }

//   const nextGen = [];

//   currentGen.forEach(({ children }) => {
//     nextGen.push(...children);
//   });

//   return getGeneration(genNum - 1, nextGen);
// }

// colorGeneration(1);
// colorGeneration(3);
// colorGeneration(5);
// colorGeneration(7);

function colorGeneration(targetGeneration) {
  let generation = 1;
  let currentGen = [...document.body.children]

  while (generation < targetGeneration) {
    generation += 1;
    currentGen = getAllChildrenOf(currentGen);
  }

  if (elements) {
    color(elements);
  }
}

function color(elements) {
  elements.forEach(({classList}) => {
    classList.add("generation-color");
  });
}

function getAllChildrenOf(parents) {
  return parents.map(({children}) => Array.prototype.slice
                                                    .call(children))
                                                    .reduce((collection, children) => collection.concat(children), []);
}

colorGeneration(7);