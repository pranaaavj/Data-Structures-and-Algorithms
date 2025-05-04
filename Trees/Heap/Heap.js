class Heap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.unshift(val);
    this.heapifyDown(0);
  }

  createHeap(arr) {
    this.heap = [...arr];
    for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  delete() {
    let max = this.heap[0];
    let last = this.heap.pop();

    if (this.heap.length) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }

    return max;
  }

  heapifyUp(index = this.heap.length - 1) {
    let parent = this.findParent(index);
    while (index > 0 && this.heap[index] > this.heap[parent]) {
      this.swap(index, parent);
      index = parent;
      parent = this.findParent(index);
    }
  }

  heapifyDown(index = 0, length = this.heap.length) {
    while (true) {
      let largest = index;
      let left = this.left(index);
      let right = this.right(index);

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  sort() {
    let length = this.heap.length;
    while (length > 0) {
      this.swap(0, length - 1);

      let index = 0;

      while (true) {
        let largest = index;
        let left = this.left(index);
        let right = this.right(index);

        if (left < length - 1 && this.heap[left] > this.heap[largest]) {
          largest = left;
        }

        if (right < length - 1 && this.heap[right] > this.heap[largest]) {
          largest = right;
        }

        if (largest === index) break;

        this.swap(index, largest);
        index = largest;
      }
      length--;
    }
  }

  left(index) {
    return 2 * index + 1;
  }

  right(index) {
    return 2 * index + 2;
  }

  findParent(index) {
    return Math.floor((index - 1) / 2);
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

const maxHeap = new Heap();

maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(30);
maxHeap.insert(50);
maxHeap.insert(80);

console.log(maxHeap.heap);
