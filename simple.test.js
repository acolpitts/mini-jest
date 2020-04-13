const { sum, subtract, multiplyAsync } = require("./simple");

let result, expected;

test("it should add two numbers", () => {
  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
});

test("it should subtract two numbers", () => {
  result = subtract(7, 4);
  expected = 3;
  expect(result).toBe(expected);
});

test("it should multiply two numbers asynchronously", async () => {
  result = await multiplyAsync(7, 4);
  expected = 28;
  expect(result).toBe(expected);
});
