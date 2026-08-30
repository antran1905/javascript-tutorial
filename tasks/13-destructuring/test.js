const assert = require('assert');

function runTests() {
  const results = [];
  try {
    const { getFirstTwo, swapValues, extractName, withDefaults, getScores } = require('./solution');

    try {
      assert.deepStrictEqual(getFirstTwo([10,20,30]), {first:10, second:20});
      results.push({ name: 'getFirstTwo', passed: true });
    } catch (e) { results.push({ name: 'getFirstTwo', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(swapValues(1, 2), [2, 1]);
      results.push({ name: 'swapValues', passed: true });
    } catch (e) { results.push({ name: 'swapValues', passed: false, error: e.message }); }

    try {
      assert.strictEqual(extractName({name:{first:'John',last:'Doe'},age:30}), 'John Doe');
      results.push({ name: 'extractName', passed: true });
    } catch (e) { results.push({ name: 'extractName', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(withDefaults({color:'red'}), {color:'red',size:'medium',count:1});
      results.push({ name: 'withDefaults', passed: true });
    } catch (e) { results.push({ name: 'withDefaults', passed: false, error: e.message }); }

    try {
      assert.deepStrictEqual(getScores({name:'Bob',scores:[1,2,3]}), {name:'Bob',math:1,english:2,science:3});
      results.push({ name: 'getScores', passed: true });
    } catch (e) { results.push({ name: 'getScores', passed: false, error: e.message }); }

  } catch (error) {
    results.push({ name: 'Module load', passed: false, error: error.message });
  }
  return results;
}

module.exports = { runTests };
