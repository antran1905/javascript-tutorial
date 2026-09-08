const assert = require('assert');

function runTests() {
  const results = [];
  const {
    uniqueValues,
    setOperations,
    countOccurrences,
    groupBy,
    mapToObject,
    objectToMap
  } = require('./solution');

  try {
    assert.deepStrictEqual(uniqueValues([1, 2, 2, 3, 1]), [1, 2, 3]);
    assert.deepStrictEqual(uniqueValues([]), []);
    results.push({ name: 'uniqueValues', passed: true });
  } catch (error) {
    results.push({ name: 'uniqueValues', passed: false, error: error.message });
  }

  try {
    const ops = setOperations([1, 2, 3], [2, 3, 4]);
    assert.deepStrictEqual(ops.union.sort(), [1, 2, 3, 4]);
    assert.deepStrictEqual(ops.intersection.sort(), [2, 3]);
    assert.deepStrictEqual(ops.difference.sort(), [1]);
    results.push({ name: 'setOperations', passed: true });
  } catch (error) {
    results.push({ name: 'setOperations', passed: false, error: error.message });
  }

  try {
    const mapCount = countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']);
    assert.strictEqual(mapCount.get('a'), 3);
    assert.strictEqual(mapCount.get('b'), 2);
    assert.strictEqual(mapCount.get('c'), 1);
    results.push({ name: 'countOccurrences', passed: true });
  } catch (error) {
    results.push({ name: 'countOccurrences', passed: false, error: error.message });
  }

  try {
    const grouped = groupBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd');
    assert.deepStrictEqual(grouped.get('odd'), [1, 3, 5]);
    assert.deepStrictEqual(grouped.get('even'), [2, 4]);
    results.push({ name: 'groupBy', passed: true });
  } catch (error) {
    results.push({ name: 'groupBy', passed: false, error: error.message });
  }

  try {
    const map = new Map([['a', 1], ['b', 2]]);
    const obj = mapToObject(map);
    assert.deepStrictEqual(obj, { a: 1, b: 2 });
    results.push({ name: 'mapToObject', passed: true });
  } catch (error) {
    results.push({ name: 'mapToObject', passed: false, error: error.message });
  }

  try {
    const obj = { a: 1, b: 2 };
    const map = objectToMap(obj);
    assert.strictEqual(map.get('a'), 1);
    assert.strictEqual(map.get('b'), 2);
    results.push({ name: 'objectToMap', passed: true });
  } catch (error) {
    results.push({ name: 'objectToMap', passed: false, error: error.message });
  }

  return results;
}

module.exports = { runTests };
