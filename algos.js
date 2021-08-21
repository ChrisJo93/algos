// Basic Algos

/*
1. Linear Search
A linear search or sequential search is
a method for finding an element within a list.
*/

const item = [1, 2, 3, 4, 5, 6, 7, 100, 22];

function linearSearch(array, iteration, searchNumber) {
  let i;
  for (i = 0; i < iteration; i++) if (array[i] == searchNumber) return i;
  return -1;
}

let result = linearSearch(item, item.length, 100);
result == -1
  ? document.write('Item not found')
  : document.write(`Item is at index ${result}`);

function simpleRateLimiter(maxRequests, window, requestTimestamps) {
  let arr = [];

  for (i = 0; i < requestTimestamps; i++) {
    if (
      requestTimestamps[i] > window - 1 &&
      arr.includes('true').length > !maxRequests
    ) {
      arr.push(false);
    } else arr.push(true);
  }
  return arr;
}
