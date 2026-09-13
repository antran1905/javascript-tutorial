/**
 * @param {string} url
 * @returns {Promise<Object>}
 */
function simulateFetch(url) {
  return new Promise(resolve => setTimeout(() => resolve({ url, data: 'Response from ' + url }), 20));
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {Promise<number>}
 */
async function asyncAdd(a, b) {
  // TODO: return a + b (automatically wrapped in a promise)
}

/**
 * @param {string[]} urls
 * @returns {Promise<Object[]>}
 */
async function fetchSequential(urls) {
  // TODO: fetch sequentially using simulateFetch, return results
}

/**
 * @param {string[]} urls
 * @returns {Promise<Object[]>}
 */
async function fetchParallel(urls) {
  // TODO: fetch in parallel using simulateFetch and Promise.all, return results
}

/**
 * @param {Function} fn
 * @param {number} maxRetries
 * @returns {Promise<any>}
 */
async function asyncRetry(fn, maxRetries) {
  // TODO: call async fn(). If it rejects, retry up to maxRetries times.
}

/**
 * @param {any[]} items
 * @param {Function} asyncProcessor
 * @returns {Promise<any[]>}
 */
async function processItems(items, asyncProcessor) {
  // TODO: process items sequentially using asyncProcessor(item)
}

module.exports = { simulateFetch, asyncAdd, fetchSequential, fetchParallel, asyncRetry, processItems };
