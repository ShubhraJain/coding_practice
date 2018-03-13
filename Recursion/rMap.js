// Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

var rMap = function(array, callback) {
  var res = [];
  if (!array[0]) {
    return res;
  }
  return res.concat(callback(array[0]), rMap(array.slice(1), callback));
};
