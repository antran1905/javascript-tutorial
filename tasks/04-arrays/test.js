const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { getFirst, getLast, removeFirst, insertAt, unique } = require('./solution');
    
    try {
      assert.strictEqual(getFirst([1, 2, 3]), 1);
      assert.strictEqual(getFirst([]), undefined);
      results.push({ name: 'getFirst works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getFirst works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(getLast([1, 2, 3]), 3);
      assert.strictEqual(getLast([]), undefined);
      results.push({ name: 'getLast works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getLast works correctly', passed: false, error: error.message });
    }

    try {
      const original = [1, 2, 3];
      const result = removeFirst(original);
      assert.deepStrictEqual(result, [2, 3]);
      assert.deepStrictEqual(original, [1, 2, 3], 'Original array was mutated');
      results.push({ name: 'removeFirst works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'removeFirst works correctly', passed: false, error: error.message });
    }

    try {
      const original = [1, 3];
      const result = insertAt(original, 1, 2);
      assert.deepStrictEqual(result, [1, 2, 3]);
      assert.deepStrictEqual(original, [1, 3], 'Original array was mutated');
      results.push({ name: 'insertAt works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'insertAt works correctly', passed: false, error: error.message });
    }

    try {
      assert.deepStrictEqual(unique([1, 2, 2, 3, 3]), [1, 2, 3]);
      assert.deepStrictEqual(unique(['a', 'a', 'b']), ['a', 'b']);
      assert.deepStrictEqual(unique([]), []);
      results.push({ name: 'unique works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'unique works correctly', passed: false, error: error.message });
    }

  } catch (err) {
    results.push({ name: 'Load solution file', passed: false, error: err.message });
  }
  
  return results;
}

module.exports = { runTests };
