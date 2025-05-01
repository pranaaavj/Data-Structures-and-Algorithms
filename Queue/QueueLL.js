class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(maxSize) {
    this.front = null;
    this.tail = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  enqueue(value) {
    if (this.size >= this.maxSize) {
      return console.log('Queue is full');
    }

    const newNode = new Node(value);
    this.size++;

    if (!this.front || !this.tail) {
      this.front = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    if (!this.front || !this.tail) {
      return console.log('This queue is empty');
    }

    let removed = this.front.value;
    this.front = this.front.next;

    console.log('Removed: ', removed);
    return removed;
  }

  print() {
    let current = this.front;
    let values = '';
    while (current) {
      values += current.value + ' ';
      current = current.next;
    }

    console.log(values);
  }
}

const queue = new Queue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
