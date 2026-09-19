/**
 * @param {number} initial
 * @returns {Object} { increment, decrement, getCount, reset }
 */
function createCounter(initial = 0) {
  let count = initial;

  return {
    increment() {
      count++;
      return count;
    },

    decrement() {
      count--;
      return count;
    },

    getCount() {
      return count;
    },

    reset() {
      count = initial;
      return count;
    },
  };
}

/**
 * @returns {Object} { get(key), set(key, value), has(key), clear() }
 */
function createCache() {
  const cache = new Map();

  return {
    get(key) {
      return cache.get(key);
    },

    set(key, value) {
      cache.set(key, value);
    },

    has(key) {
      return cache.has(key);
    },

    clear() {
      cache.clear();
    },
  };
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
