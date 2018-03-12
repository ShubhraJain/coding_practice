// Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

var buildList = (value, length) => {
  var res = [];
  if (length === 0) {
    return res;
  }
  return res.concat(value, buildList(value, length - 1));
}

console.log(buildList(0, 5))
console.log(buildList(7, 3))
