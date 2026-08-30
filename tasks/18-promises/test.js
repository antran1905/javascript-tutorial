const assert = require('assert');

async function runTests() {
  const results = [];
  
  try {
    const { delay } = require('./solution');
    const start = Date.now();
    await delay(50);
    const diff = Date.now() - start;
    assert.ok(diff >= 40);
    results.push({ name: 'delay', passed: true });
  } catch (error) { results.push({ name: 'delay', passed: false, error: error.message }); }
  
  try {
    const { fetchData } = require('./solution');
    const data = await fetchData(true);
    assert.deepStrictEqual(data, { data: 'Success!' });
    await assert.rejects(fetchData(false), /Failed to fetch/);
    results.push({ name: 'fetchData', passed: true });
  } catch (error) { results.push({ name: 'fetchData', passed: false, error: error.message }); }
  
  try {
    const { chainPromises } = require('./solution');
    const result = await chainPromises(5, x => x + 1, x => x * 2);
    assert.strictEqual(result, 12);
    results.push({ name: 'chainPromises', passed: true });
  } catch (error) { results.push({ name: 'chainPromises', passed: false, error: error.message }); }
  
  try {
    const { promiseAll, delay } = require('./solution');
    const p1 = Promise.resolve(1);
    const p2 = delay(20).then(() => 2);
    const res = await promiseAll([p1, p2]);
    assert.deepStrictEqual(res, [1, 2]);
    await assert.rejects(promiseAll([p1, Promise.reject(new Error('fail'))]), /fail/);
    results.push({ name: 'promiseAll', passed: true });
  } catch (error) { results.push({ name: 'promiseAll', passed: false, error: error.message }); }
  
  try {
    const { timeout, delay } = require('./solution');
    const p = delay(50).then(() => 'done');
    const res = await timeout(p, 100);
    assert.strictEqual(res, 'done');
    await assert.rejects(timeout(delay(100), 20), /Operation timed out/);
    results.push({ name: 'timeout', passed: true });
  } catch (error) { results.push({ name: 'timeout', passed: false, error: error.message }); }
  
  return results;
}

module.exports = { runTests };
