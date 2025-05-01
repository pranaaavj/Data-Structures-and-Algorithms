class QNode {
  value: number;
  next: QNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  head: QNode | null = null;
  tail: QNode | null = null;

  enqueue(value: number) {
    if (!value) return console.log('Please provide a value');

    let newNode = new QNode(value);

    if (!this.head || !this.tail) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue(): number | void {
    if (!this.head) return console.log('Queue is empty.');

    let value = this.head.value;
    this.head = this.head.next;

    return value;
  }

  getFront() {
    return this.head?.value || console.log('Queue empty');
  }

  getRear() {
    return this.tail?.value || console.log;
  }

  print() {
    let queue = '';
    let current = this.head;
    while (current) {
      queue += ` ${current.value} \n`;
      current = current.next;
    }
    console.log(queue);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.dequeue();
queue.dequeue();

queue.print();
