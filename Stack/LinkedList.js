class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxLength) {
    this.top = null;
    this.size = 0;
    this.maxLength = maxLength;
  }

  push(value) {
    if (this.size >= this.maxLength) {
      return console.log('Stack Overflow');
    }

    const newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.size <= 0) {
      return console.log('Stack Underflow');
    }

    let popped = this.top;
    this.top = popped.next;
    this.size--;

    return popped.value;
  }

  swap() {
    if (!this.top || !this.top.next) {
      return;
    }

    let current = this.top;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    current.next = this.top.next;
    prev.next = this.top;
    this.top.next = null;
    this.top = current;
  }

  reverse() {
    let current = this.top;

    let previous = null;

    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.top = previous;
  }

  print() {
    let stack = '';
    let current = this.top;

    while (current) {
      stack += `|${current.value}|\n----\n`;
      current = current.next;
    }

    console.log(stack);
  }
}

const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.swap();

stack.print();
