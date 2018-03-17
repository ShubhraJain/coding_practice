var BinaryMinHeap = function() {
  this.heap = [];
}

// parent = Math.floor((index - 1) / 2);
// children = [2i + 1, 2i + 2];
BinaryMinHeap.prototype.swap = function(index, parentIndex) {
  var temp = this.heap[index];
  this.heap[index] = this.heap[parentIndex];
  this.heap[parentIndex] = temp;
};

BinaryMinHeap.prototype.insert = function(value) {
  this.heap.push(value);
  // get last value's parent
  var lastIndex = this.heap.length - 1;
  var parentIndex = Math.floor((lastIndex - 1) / 2);
  while (this.heap[lastIndex] < this.heap[parentIndex]) {
    this.swap(lastIndex, parentIndex);
    lastIndex = parentIndex;
    parentIndex = Math.floor((lastIndex - 1) / 2);
  }
};

BinaryMinHeap.prototype.extractMin = function() {
  // swap first and last value in the heap
  this.swap(0, this.heap.length - 1);
  this.heap.pop();
  var idx = 0;
  var leftChildIndex = 2 * idx + 1;
  while (this.heap[idx] > this.heap[leftChildIndex]) {
    this.swap(idx, leftChildIndex);
    idx = leftChildIndex;
    leftChildIndex = 2 * idx + 1;
  }
}

var binaryMinHeap = new BinaryMinHeap();
binaryMinHeap.insert(5);
binaryMinHeap.insert(2);
binaryMinHeap.insert(4);
binaryMinHeap.insert(1);
console.log(binaryMinHeap.heap);
binaryMinHeap.extractMin();
console.log(binaryMinHeap.heap);
binaryMinHeap.extractMin();
console.log(binaryMinHeap.heap);