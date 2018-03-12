// Get the integers within a range (x, y).

var inRange = ( x, y ) => {
  var res = [];
  if (x === y - 1 || x === y + 1 || x === y) {
    return [];
  }
  if (x >= y) {
    return res.concat(x - 1, inRange(x - 1, y));
  }
  return res.concat(x + 1, inRange(x + 1, y));
}

console.log(inRange(2, 9));
console.log(inRange(-9, -2));
console.log(inRange(7, 2))
console.log(inRange(3, -3))
console.log(inRange(2, 2))