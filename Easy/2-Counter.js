// Problem:
// Given an integer n, return a counter function.
// This counter function initially returns n
// and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * time = O(1) constant time operation
 * space = O(1) constant memory used
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
