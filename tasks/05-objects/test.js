const assert = require('assert');

function runTests() {
  const results = [];
  
  try {
    const { createPerson, getFullName, getKeys, hasProperty, mergObjects } = require('./solution');
    
    try {
      assert.deepStrictEqual(createPerson('Alice', 30), { name: 'Alice', age: 30 });
      results.push({ name: 'createPerson works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'createPerson works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(getFullName({ firstName: 'John', lastName: 'Doe' }), 'John Doe');
      results.push({ name: 'getFullName works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getFullName works correctly', passed: false, error: error.message });
    }

    try {
      assert.deepStrictEqual(getKeys({ a: 1, b: 2 }), ['a', 'b']);
      assert.deepStrictEqual(getKeys({}), []);
      results.push({ name: 'getKeys works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'getKeys works correctly', passed: false, error: error.message });
    }

    try {
      assert.strictEqual(hasProperty({ a: 1 }, 'a'), true);
      assert.strictEqual(hasProperty({ a: 1 }, 'b'), false);
      results.push({ name: 'hasProperty works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'hasProperty works correctly', passed: false, error: error.message });
    }

    try {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const merged = mergObjects(obj1, obj2);
      
      assert.deepStrictEqual(merged, { a: 1, b: 3, c: 4 });
      assert.deepStrictEqual(obj1, { a: 1, b: 2 }, 'Original obj1 was mutated');
      results.push({ name: 'mergObjects works correctly', passed: true });
    } catch (error) {
      results.push({ name: 'mergObjects works correctly', passed: false, error: error.message });
    }

  } catch (err) {
    results.push({ name: 'Load solution file', passed: false, error: err.message });
  }
  
  return results;
}

module.exports = { runTests };
