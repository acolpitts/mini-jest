/** Executes a test */
async function test(title, callback) {
  try {
    await callback();
    console.log(`✔️ ${title}`);
  } catch (error) {
    console.log(`✖️ ${title}`);
    console.error(error);
  }
}

/** Asserts two arguments are equal */
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

// Global Export
global.test = test;
global.expect = expect;
