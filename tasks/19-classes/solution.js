class Calculator {
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
