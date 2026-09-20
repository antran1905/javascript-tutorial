class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    this.result /= value;
    return this;
  }

  reset() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }
  // TODO: constructor(result=0), add, subtract, multiply, divide, reset, getResult
  // Methods should be chainable except getResult
}constructor (result=0) {
  this.result=result;
}
 add(number) {
  this.result += number;
  return this;
 }
 subtract(number) {
  this.result -= number;
  return this;
 }
 multiply(number){
  this.result *= number;
  return this;
 }
 divide(number){
  this.result /= number;
  return this;
 }
 reset(){
  this.result =0;
  return this;
 }
 getResult(){
  return this.result;
 }


class EventEmitter {
  // TODO: on(event, callback), emit(event, ...args), off(event, callback)
}constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(callback);
        return this;
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => {
                callback(...args);
            });
        }
    }

    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                cb => cb !== callback
            );
        }
    }
}



class LinkedList {
  // TODO: append(value), prepend(value), find(value), toArray(), get size()
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  get size() {
    return this.items.length;
  }
}

class Shape {
  getArea() {
    throw new Error("Not implemented");
  }
  getPerimeter() {
    throw new Error("Not implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

module.exports = {
  Calculator,
  EventEmitter,
  LinkedList,
  Stack,
  Shape,
  Circle,
  Rectangle,
};
