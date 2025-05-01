class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    if (this.stack.length < 1) {
      this.stack.push(val);
      this.minStack.push(val);
      return;
    }

    this.stack.push(val);
    let lastEl = this.minStack[this.minStack.length - 1];
    if (val < lastEl) {
      this.minStack.push(val);
    } else {
      this.minStack.push(lastEl);
    }
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }

  print() {
    console.log(this.stack);
    console.log(this.minStack);
  }
}

const stack = new MinStack();

stack.push(1);
stack.push(2);
stack.push(0);

console.log(stack.getMin());

stack.print()

