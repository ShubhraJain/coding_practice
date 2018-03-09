var Queue = function() {
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  var length = this.size();
  this.storage[length] = value;
};

Queue.prototype.dequeue = function() {
  var length = this.size();
  if (length < 1) {
    return null;
  } 
  var elem = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  delete this.storage[length - 1];
  return elem;
}
