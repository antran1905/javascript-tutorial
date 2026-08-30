const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { doubleAll, getAdults, totalPrice, findByName, allPositive, sortByAge } = require('./solution');
    
    try {
      assert.deepStrictEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
      results.push({ name: 'doubleAll', passed: true });
    } catch (e) { results.push({ name: 'doubleAll', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(getAdults([{name:'A',age:10}, {name:'B',age:20}]), [{name:'B',age:20}]);
      results.push({ name: 'getAdults', passed: true });
    } catch (e) { results.push({ name: 'getAdults', passed: false, error: e.message }); }

    try {
      assert.strictEqual(totalPrice([{name:'A',price:10}, {name:'B',price:20}]), 30);
      results.push({ name: 'totalPrice', passed: true });
    } catch (e) { results.push({ name: 'totalPrice', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(findByName([{name:'A'}, {name:'B'}], 'B'), {name:'B'});
      results.push({ name: 'findByName', passed: true });
    } catch (e) { results.push({ name: 'findByName', passed: false, error: e.message }); }

    try {
      assert.strictEqual(allPositive([1, 2]), true);
      assert.strictEqual(allPositive([1, -2]), false);
      results.push({ name: 'allPositive', passed: true });
    } catch (e) { results.push({ name: 'allPositive', passed: false, error: e.message }); }

    try {
      const arr = [{name:'B',age:2}, {name:'A',age:1}];
      const sorted = sortByAge(arr);
      assert.deepStrictEqual(sorted, [{name:'A',age:1}, {name:'B',age:2}]);
      assert.notStrictEqual(sorted, arr);
      results.push({ name: 'sortByAge', passed: true });
    } catch (e) { results.push({ name: 'sortByAge', passed: false, error: e.message }); }
    
  } catch (error) {
    results.push({ name: 'Module load', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
