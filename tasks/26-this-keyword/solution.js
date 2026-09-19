function createGreeter(name) {
  return {
    name: name,

    greet: function () {
      return `Hello, I am ${this.name}`;
    },
  };
}

function fixThis(obj, methodName) {
  return obj[methodName].bind(obj);
}

function callWithContext(fn, context, ...args) {
  // TODO: Call fn with the given context and args using .call(). Return the result.
}

function applyWithContext(fn, context, args) {
  // TODO: Call fn with the given context and args array using .apply(). Return the result.
}

function createTimer(label) {
  // TODO: Return object with label property, start() method that stores start time in this.startTime = Date.now(),
  // and elapsed() that returns Date.now() - this.startTime. Use regular function for methods.
}

module.exports = {
  createGreeter,
  fixThis,
  callWithContext,
  applyWithContext,
  createTimer,
};
