const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
// Simulate Async function
const multiply = (a, b) => a * b;
const multiplyAsync = (...args) => Promise.resolve(multiply(...args));

module.exports = {
  sum,
  subtract,
  multiplyAsync,
};
