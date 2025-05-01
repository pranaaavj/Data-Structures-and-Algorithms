class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  insert(value, index) {
    if (!value || index == null) return;

    let newNode = new LinkNode(value);

    if (!this.head && index === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }

    if (this.tail && index === this.length - 1) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!current) return 'Index out of bounds';
      current = current.next;
    }

    if (!current) return;

    newNode.next = current.next;
    current.next = newNode;
  }

  delete(index = null) {
    if (!this.head || index === null) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      if (!current) return 'Index out of bounds';
      current = current.next;
    }

    if (!current || !current.next) return;

    current.next = current.next.next;
  }

  removeMiddleElement() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let slow = this.head;
    let fast = this.head;

    let previousSlow = null;
    while (fast && fast.next) {
      fast = fast.next.next;
      previousSlow = slow;
      slow = slow.next;
    }

    previousSlow.next = slow.next;
  }

  removeLastInstance(value) {
    if (!this.head) {
      console.log('This list is empty');
      return;
    }

    let current = this.head;
    let lastOccur = null;
    while (current.next) {
      if (current.next.value === value) {
        lastOccur = current;
      }
      current = current.next;
    }

    if (lastOccur) {
      lastOccur.next = lastOccur.next.next;
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
    }
  }

  removeDuplicates() {
    if (!this.head) {
      return;
    }

    let check = {};
    let current = this.head;
    let previous = null;
    while (current) {
      if (check[current.value]) {
        previous.next = current.next;
      } else {
        check[current.value] = true;
        previous = current;
      }
      current = current.next;
    }
  }

  deleteKthNode(k) {
    if (!this.head) return;

    let dummy = new LinkNode(0);
    dummy.next = this.head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < k; i++) {
      if (!fast) return -1;
      fast = fast.next;
    }

    if (!fast) {
      this.head = this.head.next;
      return;
    }

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }

    slow.next = slow.next.next;

    this.head = dummy.next;
  }

  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' => '));
  }
}

const list = new LinkedList();
list.insert(10, 0);
list.insert(20, 1);
list.insert(30, 2);
list.insert(40, 3); // Note: second occurrence of 20
list.insert(50, 4);

list.delete(4);

list.print();
