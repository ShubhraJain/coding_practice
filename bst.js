var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var BST = function() {
}

BST.prototype.insert = function(root, value) {
  var newNode = new Node(value);
  var currNode = root;
  while(currNode) {
    if (value < currNode.value) {
      if (!currNode.left) {
        currNode.left = newNode;
        break;
      } else {
        currNode = currNode.left;
      }
    } else {
      if (!currNode.right) {
        currNode.right = newNode;
        break;
      } else {
        currNode = currNode.right;
      }
    }
  }
  return newNode;
}

BST.prototype.minOfTree = function(node) {
  if (node.left) {
    return this.minOfTree(node.left);
  }
  return node;
}

BST.prototype.maxOfTree = function(node) {
  if (node.right) {
    return this.maxOfTree(node.right);
  }
  return node;
}

BST.prototype.getSuccessor = function(root, node) {
  if(node.right) {
    return this.minOfTree(node.right);
  } 
  var temp;
  while (root) {
    if (node.value < root.value) {
      temp = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return temp.value > node.value ? temp : null;
}

BST.prototype.getPredecessor = function(root, node) {
  if (node.left) {
    return this.maxOfTree(node.left);
  }
  var temp;
  while (root) {
    if (node.value > root.value) {
      temp = root;
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return temp.value < node.value ? temp : null;
}

BST.prototype.inOrder = function(root) {
  var arr = [];
  var traverse = function(node) {
    if (node.left) {
      traverse(node.left);
    }
    arr.push(node.value);
    if (node.right) {
      traverse(node.right);
    }   
  }
  traverse(root);
  return arr;
}

BST.prototype.getParent = function(root, node) {
  while(root) {
    if (node.value > root.value) {
      if (root.right.value === node.value) {
        return root;
      } else {
        root = root.right;
      }
    } else {
      if (root.left.value === node.value) {
        return root;
      } else {
        root = root.left;
      }
    }
  }
}

BST.prototype.deleteNode = function(root, node) {
  if (!node.left && !node.right) {
    var parent = this.getParent(root, node);
    parent.value > node.value ? (parent.left = null) : (parent.right = null);
    return;
  } else if (node.left && !node.right) {
    var parent = this.getParent(root, node);
    parent.value < node.value ? (parent.right = node.left) : (parent.left = node.left);
    return;
  } else if (node.right && !node.left) {
    var parent = this.getParent(root, node);
    parent.value < node.value ? (parent.right = node.right) : (parent.left = node.right);
    return;
  } else {
    var predecessor = this.getPredecessor(root, node);
    if (predecessor.left) {
      var preParent = this.getParent(root, predecessor);
      preParent.right = predecessor.left;
    }
    predecessor.left = node.left;
    predecessor.right = node.right;
    node.left = node.right = null;
    return;
  }
}

var bst = new BST();
var root = bst.insert(null, 5);
var c = bst.insert(root, 3);
var d = bst.insert(root, 4);
var b = bst.insert(root, 3.5);
var a = bst.insert(root, 4.75);
var e = bst.insert(root, 6);
var f = bst.insert(root, 9);
var g = bst.insert(root, 7);
var h = bst.insert(root, 11);
var j = bst.insert(root, 10);
var i = bst.insert(root, 12);
var k = bst.insert(root, 2);
var l = bst.insert(root, 4.5);
console.log(bst.inOrder(root));
// bst.deleteNode(root, k);
// bst.deleteNode(root, a);
// bst.deleteNode(root, g);
// bst.deleteNode(root, root);
// console.log(l);
// console.log(bst.getPredecessor(root, j) === 9);
// console.log(bst.getPredecessor(root, a) === 4);
// console.log(bst.getPredecessor(root, b) === 3);
// console.log(bst.getPredecessor(root, c) === 2);
// console.log(bst.getPredecessor(root, d) === 3.5);
// console.log(bst.getPredecessor(root, e) === 5);
// console.log(bst.getPredecessor(root, f) === 7);
// console.log(bst.getPredecessor(root, g) === 6);
// console.log(bst.getPredecessor(root, h) === 10);
// console.log(bst.getPredecessor(root, k) === null);
// console.log(bst.getPredecessor(root, i) === 11);