var Stack = function() {
  this.storage = {};
}

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.push = function(value) {
  var length = this.size();
  this.storage[length] = value;
};

Stack.prototype.pop = function() {
  var length = this.size();
  var elem = this.storage[length - 1];
  delete this.storage[length - 1];
  return elem;
}
