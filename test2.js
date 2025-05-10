class Heap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  delete() {
    this.swap(0, this.heap.length - 1);
    let deleted = this.heap.pop();

    this.heapifyDown(0);
    return deleted;
  }

  heapifyUp() {
    let arr = this.heap;
    let current = this.heap.length - 1;
    let parent = Math.floor((current - 1) / 2);
    while (current > 0 && arr[current] < arr[parent]) {
      this.swap(current, parent);
      current = parent;
      parent = Math.floor((current - 1) / 2);
    }
  }

  heapifyDown(index, length = this.heap.length) {
    while (true) {
      let largest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < length && this.heap[left] < this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] < this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(largest, index);
      index = largest;
    }
  }

  swap(start, end) {
    let temp = this.heap[start];
    this.heap[start] = this.heap[end];
    this.heap[end] = temp;
  }
}

const heap = new Heap();

heap.insert(50);
heap.insert(30);
heap.insert(20);
heap.insert(40);
heap.insert(10);

console.log(heap.delete());
console.log(heap.delete());

console.log(heap.heap);
