var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  var node = this.makeNode(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } 
  this.tail.next = node;
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
 if (!this.head) {
  return null;
 }
 var curHead = this.head.value;
 if (!this.head.next) {
  this.head = null;
  this.tail = null;
 } else {
  this.head = this.head.next;
 }
 return curHead;
};

LinkedList.prototype.contains = function(value) {
  var curNode = this.head;
  while (curNode) {
    if (curNode.value === value) {
      return true;
    }
    curNode = curNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

