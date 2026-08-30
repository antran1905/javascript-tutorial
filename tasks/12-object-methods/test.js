const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { getPropertyNames, getPropertyValues, toPairs, fromPairs, pick, invert } = require('./solution');

    try {
      assert.deepStrictEqual(getPropertyNames({a:1,b:2}), ['a','b']);
      results.push({ name: 'getPropertyNames', passed: true });
    } catch (e) { results.push({ name: 'getPropertyNames', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(getPropertyValues({a:1,b:2}), [1,2]);
      results.push({ name: 'getPropertyValues', passed: true });
    } catch (e) { results.push({ name: 'getPropertyValues', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(toPairs({a:1}), [['a',1]]);
      results.push({ name: 'toPairs', passed: true });
    } catch (e) { results.push({ name: 'toPairs', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(fromPairs([['a',1]]), {a:1});
      results.push({ name: 'fromPairs', passed: true });
    } catch (e) { results.push({ name: 'fromPairs', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(pick({a:1,b:2,c:3}, ['a','c']), {a:1,c:3});
      results.push({ name: 'pick', passed: true });
    } catch (e) { results.push({ name: 'pick', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(invert({a:'1',b:'2'}), {'1':'a','2':'b'});
      results.push({ name: 'invert', passed: true });
    } catch (e) { results.push({ name: 'invert', passed: false, error: e.message }); }

  } catch (error) {
    results.push({ name: 'Module load', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
