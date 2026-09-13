class Calculator {
  // TODO: constructor(result=0), add, subtract, multiply, divide, reset, getResult
  // Methods should be chainable except getResult
}

class EventEmitter {
  // TODO: on(event, callback), emit(event, ...args), off(event, callback)
}

class LinkedList {
  // TODO: append(value), prepend(value), find(value), toArray(), get size()
}

class Stack {
  // TODO: push(value), pop(), peek(), isEmpty(), get size()
}

class Shape {
  getArea() { throw new Error('Not implemented'); }
  getPerimeter() { throw new Error('Not implemented'); }
}

class Circle extends Shape {
  // TODO: constructor(radius), getArea(), getPerimeter()
}

class Rectangle extends Shape {
  // TODO: constructor(width, height), getArea(), getPerimeter()
}

module.exports = { Calculator, EventEmitter, LinkedList, Stack, Shape, Circle, Rectangle };
