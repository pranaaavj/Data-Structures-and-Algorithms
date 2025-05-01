class LinkNode {
  value = null;
  next = null;
  previous = null;

  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  head = null;

  getIndex(index = null) {
    if (!this.head || index < 0 || index === null) return;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current) return -1;
      current = current.next;
    }

    if (!current) return -1;

    console.log(current.value);
    return current.value;
  }

  getValue(value) {
    if (!this.head || index < 0 || index === null) return;

    let current = this.head;
    while (current && current.value !== value) {
      current = current.value;
    }

    if (!current) return -1;

    console.log();
  }

  insert(value, index = null) {
    let newNode = new LinkNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (index === 0) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    if (index === null) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.previous = current;
      return;
    }

    let current = this.head;
    while (current && index > 1) {
      current = current.next;
      index--;
    }

    if (!current) {
      return console.log('Index out of bounds');
    }

    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    if (newNode.next) {
      newNode.next.previous = newNode;
    }
  }

  delete(index) {
    if (!this.head) return;

    if (index === 0) {
      let nextNode = this.head.next;
      if (!nextNode) {
        this.head = null;
        return;
      }

      this.head = this.head.next;
      this.head.previous = null;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current) break;
      current = current.next;
    }

    if (!current) {
      return console.log('Index out of bounds');
    }

    if (!current.next) {
      current.previous.next = null;
      current.previous = null;
      return;
    }

    current.previous.next = current.next;
    current.next.previous = current.previous;

    current.next = null;
    current.previous = null;
  }

  print() {
    let current = this.head;
    let values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' => '));
  }
}

const ls = new DoublyLinkedList();

ls.insert(10);
ls.insert(20);
ls.insert(30);
ls.insert(40);
ls.insert(50);

// ls.delete(4);

ls.print();
