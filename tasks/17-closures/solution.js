/**
 * @param {number} initial
 * @returns {Object} { increment, decrement, getCount, reset }
 */
function createCounter(initial = 0) {
  // TODO: implement counter with closure
}let count = initial;
return {
  increment: function() {
    count++;
  },
  decrement: function() {
    count--;
  },
  getCount: function(){
    return count;
  },
  reset: function() {
    count = initial;
  }
};

/**
 * @returns {Object} { get(key), set(key, value), has(key), clear() }
 */
function createCache() {
  // TODO: implement cache using closure (e.g., Map or Object)
}let cache = new Map();
return {
  get: function(key) {
    return cache.get(key);
  },
  set: function(key, value) {
    cache.set(key, value);
  },
  has: function(key) {
    return cache.has(key);
  },
  clear: function() {
    cache.clear();
  }
};

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
}let call=0;
let start = Date.now();
return function() {
  const now = Date.now();
  if (now - start > timeWindowMs) {
    call = 0;
    start = now;
  }
  if (call >= maxCalls) {
    throw new Error('Rate limit exceeded');
  }
  call++;
};

/**
 * @param {...Function} fns
 * @returns {Function}
 */
function pipe(...fns) {
  // TODO: return a function that pipes its argument through all fns left to right
}

module.exports = { createCounter, createCache, once, createRateLimiter, pipe };
