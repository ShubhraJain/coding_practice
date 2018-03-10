var Tree = function(value) {
  this.value = value;
  this.parent = null;
  this.children = [];
  return this;
};

Tree.prototype.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

Tree.prototype.removeFromParent = function(value) {
  var index = this.parent.children.indexOf(value);
  this.parent.children.splice(index, 1);
  this.parent = null;
};

Tree.prototype.contains = function(value) {
  var res = false;
  if (this.value === value) {
    return true;
  }
  for (var i = 0; i < this.children.length && res === false; i++) {
    res = this.children[i].contains(value);
  });
  return res;
};

Tree.prototype.traverse = function(callback) {
  callback(this.value);
  this.children.forEach( (child) => {
    child.traverse(callback);
  });
}