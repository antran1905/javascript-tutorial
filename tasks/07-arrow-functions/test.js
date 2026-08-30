const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { double, isPositive, getFullName, filterEvens, sortDescending } = require('./solution');
    
    // Test double
    try {
      assert.strictEqual(double(4), 8);
      assert.strictEqual(double(-2), -4);
      results.push({ name: 'double works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'double works correctly', passed: false, error: error.message });
    }

    // Test isPositive
    try {
      assert.strictEqual(isPositive(5), true);
      assert.strictEqual(isPositive(0), false);
      assert.strictEqual(isPositive(-3), false);
      results.push({ name: 'isPositive works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'isPositive works correctly', passed: false, error: error.message });
    }

    // Test getFullName
    try {
      assert.strictEqual(getFullName('John', 'Doe'), 'John Doe');
      results.push({ name: 'getFullName works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getFullName works correctly', passed: false, error: error.message });
    }

    // Test filterEvens
    try {
      assert.deepStrictEqual(filterEvens([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
      assert.deepStrictEqual(filterEvens([1, 3, 5]), []);
      results.push({ name: 'filterEvens works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'filterEvens works correctly', passed: false, error: error.message });
    }

    // Test sortDescending
    try {
      const input = [3, 1, 4, 1, 5, 9];
      const output = sortDescending(input);
      assert.deepStrictEqual(output, [9, 5, 4, 3, 1, 1]);
      assert.notStrictEqual(input, output); // Ensure it returns a new array if possible, or at least matches output
      results.push({ name: 'sortDescending works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'sortDescending works correctly', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Import failed or fatal error', passed: false, error: error.message });
  }
  
  return results;
}

module.exports = { runTests };
