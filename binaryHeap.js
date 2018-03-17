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
  var min = this.heap.pop();
  var idx = 0;
  var leftChildIndex = 2 * idx + 1;
  var rightChildIndex = 2 * idx + 2;
  var swappingIndex = this.getSmallerChildIndex(leftChildIndex, rightChildIndex);
  while (this.heap[idx] > this.heap[swappingIndex]) {
    this.swap(idx, swappingIndex);
    idx = swappingIndex;
    leftChildIndex = 2 * idx + 1;
    rightChildIndex = 2 * idx + 2;
    swappingIndex = this.getSmallerChildIndex(leftChildIndex, rightChildIndex);
  }
  return min;
}

BinaryMinHeap.prototype.getSmallerChildIndex = function(index1, index2) {
  if (this.heap[index1] < this.heap[index2]) {
    return index1;
  } else {
    return index2;
  }
}

BinaryMinHeap.prototype.heapSort = function(array) {
  var temp = new BinaryMinHeap();
  array.forEach( (elem) => {
    temp.insert(elem);
  });
  for (var i = 0; i < array.length; i++) {
    var min = temp.extractMin();
    array[i] = min;
  }
  return array;
}

var binaryMinHeap = new BinaryMinHeap();
// binaryMinHeap.insert(5);
// binaryMinHeap.insert(2);
// binaryMinHeap.insert(4);
// binaryMinHeap.insert(1);
// console.log(binaryMinHeap.heap);
// binaryMinHeap.extractMin();
// console.log(binaryMinHeap.heap);
// binaryMinHeap.extractMin();
// console.log(binaryMinHeap.heap);
console.log(binaryMinHeap.heapSort([4, 2, 7, 1, 9, 10, 15, 6, 4, 22, 1, 99, 26]));