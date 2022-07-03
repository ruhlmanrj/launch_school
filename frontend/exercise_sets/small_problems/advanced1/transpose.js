// Takes a string representing a list of numbers in shorthand notation and
// expands the list, returning an array of its numbers.

'use strict';
function expand(list) {
  list = normalize(list);

  let prevNum;
  const nestedList = list.map(token => {
    if (!isRange(token)) {
      const nextNum = findNextNum(prevNum, token);
      prevNum = nextNum;
      return nextNum;
    } else {
      const rangeNums = expandRange(prevNum, token);
      [prevNum] = rangeNums.slice(-1);
      return rangeNums;
    }
  });

  return nestedList.flat();
}

function expandRange(prevNum, range) {
  const endpoints = NextNumbersForRange(prevNum, range);

  return endpoints.reduce((combinedIntervals, endpoint, i) => {
    if (i === endpoints.length - 1) {
      return combinedIntervals;
    } else {
      combinedIntervals.splice(-1);
      const numsToInsert = numsInInterval(endpoint, endpoints[i + 1]);
  
      return [...combinedIntervals, ...numsToInsert];
    }
  }, []);
}

function numsInInterval(start, end) {
  const diff = end - start;
  return Array.from(Array(diff + 1), (_, i) => i + start);
}

function NextNumbersForRange(prevNum, range) {
  return range.map((num, i) => {
    if (i === 0) {
      const rangeStart = prevNum ? findNextNum(prevNum, num) : Number(num);
      prevNum = rangeStart;
      return rangeStart;
    } else {
      const nextNum = findNextNum(prevNum, num);
      prevNum = nextNum;
      return nextNum;
    }
  });
}

function findNextNum(fullNum, searchNum) {
  if (!fullNum) {
    return Number(searchNum);
  }

  do {
    fullNum += 1;
  } while (!String(fullNum).endsWith(String(searchNum)));

  return fullNum;
}

function normalize(list) {
  const parseRange = /[-:]|\.\./;

  const tokens = list.split(', ');
  return tokens.map(token => {
    const rangeMatch = token.match(parseRange);
    if (!rangeMatch) {
      return token;
    } else {
      const sep = rangeMatch[0];
      return token.split(sep);
    }
  });
}

function isRange(token) {
  return Array.isArray(token);
}
