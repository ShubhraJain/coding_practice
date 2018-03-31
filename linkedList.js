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

LinkedList.prototype.reverse = function() {
  // non-recursive way to reverse a linked list
  var curr = this.head;
  var prev = null;
  var nextNode = null;
  while (curr.next !== null) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  this.head = prev;
  return this;
};

