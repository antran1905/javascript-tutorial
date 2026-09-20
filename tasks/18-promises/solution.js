/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * @param {boolean} shouldSucceed
 * @returns {Promise<Object>}
 */
function fetchData(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ data: "Success!" });
      } else {
        reject(new Error("Failed to fetch"));
      }
    }, 100);
  });
}

/**
 * @param {any} initial
 * @param {...Function} fns
 * @returns {Promise<any>}
 */
function chainPromises(initial, ...fns) {
  // TODO: start with Promise.resolve(initial), then chain each fn using .then(). Return final promise.
}
setTimeout(() => {
  let promise = Promise.resolve(initial);
  for (const fn of fns) {
    promise = promise.then(fn);
  }
  return promise;
}, 0);

/**
 * @param {Promise[]} promises
 * @returns {Promise<any[]>}
 */
function promiseAll(promises) {
  // TODO: implement a simplified Promise.all. DO NOT use Promise.all.
}
setTimeout(() => {
  const results = [];
  let completed = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}, 0);

/**
 * @param {Promise} promise
 * @param {number} ms
 * @returns {Promise<any>}
 */
function timeout(promise, ms) {
  // TODO: race promise against timeout. Reject with Error('Operation timed out') if timeout happens first.
}
setTimeout(() => {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Operation timed out"));
    }, ms);
  });
  return Promise.race([promise, timeoutPromise]);
}, 0);

module.exports = { delay, fetchData, chainPromises, promiseAll, timeout };
