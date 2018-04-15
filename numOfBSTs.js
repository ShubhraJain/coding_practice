// Write a function that will return the number of binary search trees that 
// can be constructed, with n nodes.

var numOfBSTTrees = (n) => {
  if (n <= 1) {
    return 1;
  } else {
  var count = 0;
    for (var i = 1; i <= n; i++) {
      count += numOfBSTTrees(i - 1) * numOfBSTTrees(n - i); 
    }
  }
  return count;
}

console.log(numOfBSTTrees(3));
console.log(numOfBSTTrees(4));
console.log(numOfBSTTrees(5));