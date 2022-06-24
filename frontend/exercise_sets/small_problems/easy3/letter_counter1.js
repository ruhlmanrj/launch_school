// Takes a string and returns an object holding the counts for words
// of different sizes.

function wordSizes(string) {
  const wordCounts = {};
  if (string.length === 0) return wordCounts

  string.split(' ').forEach(word => {
    const length = word.length;
    wordCounts[length] ||= 0

    wordCounts[length] += 1
  });

  return wordCounts;
}

console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 1, "6": 1 }

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// { "3": 5, "6": 1, "7": 2 }

console.log(wordSizes("What's up doc?"));
// { "2": 1, "4": 1, "6": 1 }

console.log(wordSizes(''));
// {}
