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
}return a+b;

/**
 * @param {string[]} urls
 * @returns {Promise<Object[]>}
 */
async function fetchSequential(urls) {
  // TODO: fetch sequentially using simulateFetch, return results
}let result=[];
 for (i=0; i<url.length ; i++){
  let result = await simulaeFetch(url[i]);
  result.push(result);
 }
return result;
/**
 * @param {string[]} urls
 * @returns {Promise<Object[]>}
 */
async function fetchParallel(urls) {
  // TODO: fetch in parallel using simulateFetch and Promise.all, return results
} let promises = [];

    for (let i = 0; i < urls.length; i++) {
        promises.push(simulateFetch(urls[i]));
    }

    let results = await Promise.all(promises);
  
    return results;


/**
 * @param {Function} fn
 * @param {number} maxRetries
 * @returns {Promise<any>}
 */
async function asyncRetry(fn, maxRetries) {
  // TODO: async function retry(fn, maxRetries) {
    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries) {
                throw error;
            }
        }
    }
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
