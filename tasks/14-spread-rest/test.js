const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { mergeArrays, cloneObject, addDefaults, firstAndRest, maxOfAll, removeProperty } = require('./solution');

    try {
      assert.deepStrictEqual(mergeArrays([1],[2]), [1,2]);
      results.push({ name: 'mergeArrays', passed: true });
    } catch (e) { results.push({ name: 'mergeArrays', passed: false, error: e.message }); }

    try {
      const obj = {a:1};
      const cloned = cloneObject(obj);
      assert.deepStrictEqual(cloned, {a:1});
      assert.notStrictEqual(cloned, obj);
      results.push({ name: 'cloneObject', passed: true });
    } catch (e) { results.push({ name: 'cloneObject', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(addDefaults({a:2}, {a:1,b:2}), {a:2,b:2});
      results.push({ name: 'addDefaults', passed: true });
    } catch (e) { results.push({ name: 'addDefaults', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(firstAndRest([1,2,3]), {first:1, rest:[2,3]});
      results.push({ name: 'firstAndRest', passed: true });
    } catch (e) { results.push({ name: 'firstAndRest', passed: false, error: e.message }); }

    try {
      assert.strictEqual(maxOfAll(1,5,3), 5);
      results.push({ name: 'maxOfAll', passed: true });
    } catch (e) { results.push({ name: 'maxOfAll', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(removeProperty({a:1,b:2}, 'b'), {a:1});
      results.push({ name: 'removeProperty', passed: true });
    } catch (e) { results.push({ name: 'removeProperty', passed: false, error: e.message }); }

  } catch (error) {
    results.push({ name: 'Module load', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
