const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { toJSON, fromJSON, deepClone, prettyPrint, filterAndStringify, safeJsonParse } = require('./solution');
    
    // Test toJSON
    try {
      assert.strictEqual(toJSON({a: 1}), '{"a":1}');
      assert.strictEqual(toJSON([1, 2, "3"]), '[1,2,"3"]');
      results.push({ name: 'toJSON stringifies correctly', passed: true });
    } catch (error) {
      results.push({ name: 'toJSON stringifies correctly', passed: false, error: error.message });
    }

    // Test fromJSON
    try {
      assert.deepStrictEqual(fromJSON('{"name":"Alice"}'), { success: true, data: { name: 'Alice' } });
      const failResult = fromJSON('{invalid');
      assert.strictEqual(failResult.success, false);
      assert.strictEqual(typeof failResult.error, 'string');
      results.push({ name: 'fromJSON handles valid and invalid JSON', passed: true });
    } catch (error) {
      results.push({ name: 'fromJSON handles valid and invalid JSON', passed: false, error: error.message });
    }

    // Test deepClone
    try {
      const obj = { a: { b: 2 } };
      const clone = deepClone(obj);
      assert.deepStrictEqual(clone, obj);
      assert.notStrictEqual(clone, obj);
      assert.notStrictEqual(clone.a, obj.a);
      results.push({ name: 'deepClone creates independent copy', passed: true });
    } catch (error) {
      results.push({ name: 'deepClone creates independent copy', passed: false, error: error.message });
    }

    // Test prettyPrint
    try {
      const obj = { a: 1 };
      const expected = '{\n  "a": 1\n}';
      assert.strictEqual(prettyPrint(obj), expected);
      results.push({ name: 'prettyPrint uses 2 spaces indentation', passed: true });
    } catch (error) {
      results.push({ name: 'prettyPrint uses 2 spaces indentation', passed: false, error: error.message });
    }

    // Test filterAndStringify
    try {
      const obj = { a: 1, b: 2, c: 3 };
      assert.strictEqual(filterAndStringify(obj, ['a', 'c']), '{"a":1,"c":3}');
      results.push({ name: 'filterAndStringify filters keys', passed: true });
    } catch (error) {
      results.push({ name: 'filterAndStringify filters keys', passed: false, error: error.message });
    }

    // Test safeJsonParse
    try {
      assert.deepStrictEqual(safeJsonParse('{"a":1}', {}), { a: 1 });
      assert.deepStrictEqual(safeJsonParse('invalid', { fallback: true }), { fallback: true });
      results.push({ name: 'safeJsonParse uses fallback on error', passed: true });
    } catch (error) {
      results.push({ name: 'safeJsonParse uses fallback on error', passed: false, error: error.message });
    }

  } catch (error) {
    results.push({ name: 'Load solution module', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
