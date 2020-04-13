/** Adds two numbers */
const sum = (a, b) => a + b;
/** Subtracts two numbers */
const subtract = (a, b) => a - b;
/** Multiplies two numbers */
const multiply = (a, b) => a * b;
/** Simulates an asynchronous function */
const multiplyAsync = (...args) => Promise.resolve(multiply(...args));

module.exports = {
  sum,
  subtract,
  multiply,
  multiplyAsync,
};
