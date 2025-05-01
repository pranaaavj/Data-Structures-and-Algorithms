class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StacksQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  enqueue(value) {
    this.inputStack.push(value);
  }

  dequeue() {
    if (!this.outputStack.length && !this.inputStack.length) {
      return console.log('The queue is empty');
    }

    if (this.outputStack.length) {
      return this.outputStack.pop();
    }

    if (this.inputStack.length) {
      while (this.inputStack.length) {
        let popped = this.inputStack.pop();
        this.outputStack.push(popped);
      }
      return this.outputStack.pop();
    }
  }

  print() {
    if (!this.outputStack.length && !this.inputStack.length) {
      return console.log('The queue is empty');
    }

    let result = [];

    for (let i = this.outputStack.length - 1; i >= 0; i--) {
      result.push(this.outputStack[i]);
    }

    for (let i = 0; i < this.inputStack.length; i++) {
      result.push(this.inputStack[i]);
    }

    return result;
  }

  printNumber() {
    let number = '1234';

    let reverseNumber = '';

    for (let i = 0; i < number.length; i++) {
      reverseNumber = number[i] + reverseNumber;
    }

    console.log(reverseNumber);
  }

  isEmpty() {
    return !this.inputStack.length && !this.outputStack.length;
  }
}

let queue = new StacksQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.print());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.print());
