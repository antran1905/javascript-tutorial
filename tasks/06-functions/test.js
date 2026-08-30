const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { greet, multiply, sum, applyOperation, createMultiplier } = require('./solution');
    
    // Test greet
    try {
      assert.strictEqual(greet('Alice'), 'Hello, Alice!');
      assert.strictEqual(greet(), 'Hello, World!');
      results.push({ name: 'greet works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'greet works correctly', passed: false, error: error.message });
    }

    // Test multiply
    try {
      assert.strictEqual(multiply(4, 5), 20);
      assert.strictEqual(multiply(-2, 3), -6);
      results.push({ name: 'multiply works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'multiply works correctly', passed: false, error: error.message });
    }

    // Test sum
    try {
      assert.strictEqual(sum(1, 2, 3, 4), 10);
      assert.strictEqual(sum(), 0);
      results.push({ name: 'sum works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'sum works correctly', passed: false, error: error.message });
    }

    // Test applyOperation
    try {
      assert.strictEqual(applyOperation(10, 5, (x, y) => x / y), 2);
      assert.strictEqual(applyOperation(2, 3, (x, y) => x ** y), 8);
      results.push({ name: 'applyOperation works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'applyOperation works correctly', passed: false, error: error.message });
    }

    // Test createMultiplier
    try {
      const doubler = createMultiplier(2);
      const tripler = createMultiplier(3);
      assert.strictEqual(doubler(5), 10);
      assert.strictEqual(tripler(5), 15);
      results.push({ name: 'createMultiplier works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'createMultiplier works correctly', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Import failed or fatal error', passed: false, error: error.message });
  }
  
  return results;
}

module.exports = { runTests };
