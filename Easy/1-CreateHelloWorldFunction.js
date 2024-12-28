// Problem:
// Write a function createHelloWorld. 
// It should return a new function that always returns "Hello World".

/**
 * Time: O(1) = constant time operation
 * Space: O(1)= constant space used
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

const f = createHelloWorld();
console.log(f()); // "Hello World"