class DCLinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DCLinkedList {
  head = null;
  tail = null;
  size = 0;

  insert(value, index) {
    const newNode = new DCLinkNode(value);

    if (!this.head && index === 0) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
      newNode.prev = this.head;
      return;
    }

    if (index === 0) {
      newNode.next = this.head;
      newNode.prev = this.tail;

      this.head.prev = newNode;
      this.tail.next = newNode;

      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (current.next === this.head) return console.log('Index out of bounds');
      current = current.next;
    }

    if (current === this.tail) {
      current.next = newNode;
      newNode.prev = current;
      newNode.next = this.head;
      this.tail = newNode;
      return;
    }

    newNode.next = current.next;
    newNode.prev = current;

    current.next = newNode;
    newNode.next.prev = newNode;
  }

  delete(index) {
    if (!this.head && !this.tail) {
      console.log('Please add items to the linked list');
      return;
    }
  }

  print() {
    if (!this.head) return;

    let values = [];
    let current = this.head;
    do {
      values.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(values.join(' => '));
  }
}

const ls = new DCLinkedList();

ls.insert(10, 0);
ls.insert(20, 0);
ls.insert(30, 0);

ls.insert(50, 4);

ls.print();
