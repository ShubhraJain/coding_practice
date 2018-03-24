var CircularQueue = function(size) {
  this.storage = new Array(size);
  this.front = -1;
  this.rear = -1;
}

CircularQueue.prototype.enqueue = function(value) {
  if (this.rear === this.storage.length - 1 && this.front === 0 ||
      this.rear === this.front - 1) {
    console.log('Queue is full. Operation cannot be performed');
    return;
  }
  if (this.front === -1) {
    this.front = 0;
    this.rear = 0;
  } else if (this.rear === this.storage.length - 1) {
    this.rear = 0;
  } else {
    this.rear++;
  }
  this.storage[this.rear] = value;
}

CircularQueue.prototype.dequeue = function() {
  if (this.front === -1) {
    console.log('Queue is empty. Operation cannot be performed');
    return;
  }
  var dequeuedElement = this.storage[this.front];
  delete this.storage[this.front];
  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else if (this.front === this.storage.length - 1) {
    this.front = 0;
  } else {
    this.front++;
  }
  return dequeuedElement;
}

var queue = new CircularQueue(5);
queue.dequeue();
queue.enqueue(14);
queue.enqueue(22);
queue.enqueue(13);
queue.enqueue(-6);
console.log(queue.storage);
queue.dequeue();
queue.dequeue();
console.log(queue.storage);
queue.enqueue(9);
queue.enqueue(20);
queue.enqueue(5);
console.log(queue.storage);
queue.enqueue(50);