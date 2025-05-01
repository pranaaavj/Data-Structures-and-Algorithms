class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(maxSize) {
    this.front = null;
    this.rear = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  enqueue(value) {
    if (this.size >= this.maxSize) {
      return console.log('Queue overflow, please dequeue.');
    }

    const newNode = new Node(value);
    this.size++;

    if (!this.front || !this.rear) {
      this.front = this.rear = newNode;
      this.rear.next = this.front;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
    newNode.next = this.front;
  }

  dequeue() {
    if (!this.front || !this.rear) {
      return console.log('Queue is empty');
    }

    this.size--;

    if (this.front === this.rear) {
      this.front = this.rear = null;
      return;
    }

    this.front = this.front.next;
    this.rear.next = this.front;
  }

  print() {
    if (!this.front) {
      return console.log('Queue is empty');
    }

    let current = this.front;
    let values = '';
    do {
      values += current.value + ' ';
      current = current.next;
    } while (current !== this.front);

    console.log(values);
  }
}

const queue = new Queue(5);

queue.enqueue(10);

queue.print();
