// Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]

var augmentElements = (array, aug) => {
  var res = [];
  if (array.length === 0) {
    return res;
  }
  array[0].push(aug)
  res.push(array[0]);
  return res.concat(augmentElements(array.slice(1), aug));
};

console.log(augmentElements([[],[3],[7]], 5));