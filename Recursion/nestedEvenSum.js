// Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum+= obj[key];
    }
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    }
  }  
  return sum;
};

var obj1 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
console.log(nestedEvenSum(obj1));
