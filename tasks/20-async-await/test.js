const assert = require('assert');

async function runTests() {
  const results = [];
  
  try {
    const { asyncAdd } = require('./solution');
    const res = await asyncAdd(5, 7);
    assert.strictEqual(res, 12);
    results.push({ name: 'asyncAdd', passed: true });
  } catch (error) { results.push({ name: 'asyncAdd', passed: false, error: error.message }); }
  
  try {
    const { fetchSequential } = require('./solution');
    const start = Date.now();
    const res = await fetchSequential(['a', 'b']);
    assert.ok(Date.now() - start >= 40);
    assert.strictEqual(res[0].data, 'Response from a');
    results.push({ name: 'fetchSequential', passed: true });
  } catch (error) { results.push({ name: 'fetchSequential', passed: false, error: error.message }); }
  
  try {
    const { fetchParallel } = require('./solution');
    const start = Date.now();
    const res = await fetchParallel(['a', 'b', 'c']);
    assert.ok(Date.now() - start < 60); // Should be much faster than sequential
    assert.strictEqual(res.length, 3);
    results.push({ name: 'fetchParallel', passed: true });
  } catch (error) { results.push({ name: 'fetchParallel', passed: false, error: error.message }); }
  
  try {
    const { asyncRetry } = require('./solution');
    let calls = 0;
    const fnFail = async () => { calls++; throw new Error('fail'); };
    await assert.rejects(asyncRetry(fnFail, 2), /fail/);
    assert.strictEqual(calls, 3);
    results.push({ name: 'asyncRetry', passed: true });
  } catch (error) { results.push({ name: 'asyncRetry', passed: false, error: error.message }); }
  
  try {
    const { processItems } = require('./solution');
    const res = await processItems([1, 2, 3], async (x) => x * 2);
    assert.deepStrictEqual(res, [2, 4, 6]);
    results.push({ name: 'processItems', passed: true });
  } catch (error) { results.push({ name: 'processItems', passed: false, error: error.message }); }
  
  return results;
}

module.exports = { runTests };
