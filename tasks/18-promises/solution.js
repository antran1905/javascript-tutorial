/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
function delay(ms) {
  // TODO: return a promise that resolves after ms milliseconds
}

/**
 * @param {boolean} shouldSucceed
 * @returns {Promise<Object>}
 */
function fetchData(shouldSucceed) {
  // TODO: if shouldSucceed true, resolve with { data: 'Success!' } after 100ms. Else reject with Error('Failed to fetch')
}

/**
 * @param {any} initial
 * @param {...Function} fns
 * @returns {Promise<any>}
 */
function chainPromises(initial, ...fns) {
  // TODO: start with Promise.resolve(initial), then chain each fn using .then(). Return final promise.
}

/**
 * @param {Promise[]} promises
 * @returns {Promise<any[]>}
 */
function promiseAll(promises) {
  // TODO: implement a simplified Promise.all. DO NOT use Promise.all.
}

/**
 * @param {Promise} promise
 * @param {number} ms
 * @returns {Promise<any>}
 */
function timeout(promise, ms) {
  // TODO: race promise against timeout. Reject with Error('Operation timed out') if timeout happens first.
}

module.exports = { delay, fetchData, chainPromises, promiseAll, timeout };
