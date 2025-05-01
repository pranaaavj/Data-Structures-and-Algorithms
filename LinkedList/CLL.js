class CLinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CLinkedList {
  head = null;

  insert(value, index) {
    let newNode = new CLinkNode(value);

    if (!this.head && index === 0) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    if (index === 0) {
      let tail = this.head;
      while (tail.next !== this.head) {
        tail = tail.next;
      }

      newNode.next = this.head;
      tail.next = newNode;
      this.head = newNode;

      return;
    }

    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next !== this.head) {
      current = current.next;
      i++;
    }

    if (!current) return console.log('Index out of bounds');

    if (i !== index - 1) return console.log('Index out of bounds');

    if (current.next === this.head) {
      current.next = newNode;
      newNode.next = this.head;
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  deleteAtHead() {
    if (!this.head) return console.log('List is empty');

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let tail = this.head;
    while (tail.next !== this.head) {
      tail = tail.next;
    }

    this.head = this.head.next;
    tail.next = this.head;
  }

  deleteAtTail() {
    if (!this.head) return console.log('List is empty');

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    let prevTail = this.head;
    while (prevTail.next.next !== this.head) {
      prevTail = prevTail.next;
    }

    prevTail.next = this.head;
  }

  deleteAtIndex(index) {
    if (!this.head) return console.log('List is empty');

    if (index === 0) {
      this.deleteAtHead();
      return;
    }

    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next !== this.head) {
      current = current.next;
      i++;
    }

    if (i !== index - 1 || current.next === this.head)
      return console.log('Index out of bounds');

    current.next = current.next.next;
  }

  reverseList() {
    if (!this.head) return;

    let previous = this.head;
    let current = this.head.next;

    while (current !== this.head) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head.next = previous;
    this.head = previous;
  }

  search(value) {
    let current = this.head;

    do {
      if (current.value === value) return current;

      current = current.next;
    } while (current !== this.head);

    return console.log('Value does not exist');
  }

  getSize() {
    let current = this.head;
    let count = 1;

    while (current.next !== this.head) {
      current = current.next;
      count++;
    }

    return count;
  }

  print() {
    if (!this.head) return -1;

    const values = [];
    let current = this.head;
    do {
      values.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(values.join(' => '));
  }
}

const ls = new CLinkedList();

ls.insert(10, 0);
ls.insert(20, 1);
ls.insert(30, 2);
ls.insert(40, 3);
ls.insert(50, 4);
ls.insert(60, 5);

ls.reverseList();

ls.print();
