// compute post order traversal of tree given pre and in order traversal 
// input is string
// Example:
// pre: abcdfge
// in: cbfdgae

var computeTree = (preorder, inorder) => {
  var newTree = '';
  if (preorder.length === 1) {
    return newTree += preorder; 
  }
  var rootNode = preorder[0];
  newTree += rootNode;
  var indexOfRootInInorder = inorder.indexOf(rootNode)
  var left = inorder.slice(0, indexOfRootInInorder);
  var right = inorder.slice(indexOfRootInInorder + 1);
  var leftPreOrder = preorder.slice(1, (left.length + 1));
  var rightPreOrder = preorder.slice(left.length + 1);
  return computeTree(leftPreOrder, left) + computeTree(rightPreOrder, right) + newTree;
}

console.log(computeTree('abcdfge', 'cbfdgae'));