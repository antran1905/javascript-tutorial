function createGreeter(name) {
  // TODO: Return object { name, greet() } where greet() returns 'Hello, I am <this.name>' using `this`
}

function fixThis(obj, methodName) {
  // TODO: Return a bound version of obj[methodName] that always uses obj as `this`. Use .bind()
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
  createTimer
};
