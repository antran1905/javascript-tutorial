/**
 * @param {number} initial
 * @returns {Object} { increment, decrement, getCount, reset }
 */
function createCounter(initial = 0) {
  // TODO: implement counter with closure
}

/**
 * @returns {Object} { get(key), set(key, value), has(key), clear() }
 */
function createCache() {
  // TODO: implement cache using closure (e.g., Map or Object)
}

/**
 * @param {Function} fn
 * @returns {Function}
 */
function once(fn) {
  // TODO: call fn only the first time, return the cached result for subsequent calls
}

/**
 * @param {number} maxCalls
 * @param {number} timeWindowMs
 * @returns {Function}
 */
function createRateLimiter(maxCalls, timeWindowMs) {
  // TODO: return function that throws Error if called > maxCalls times within timeWindowMs
}

/**
 * @param {...Function} fns
 * @returns {Function}
 */
function pipe(...fns) {
  // TODO: return a function that pipes its argument through all fns left to right
}

module.exports = { createCounter, createCache, once, createRateLimiter, pipe };
