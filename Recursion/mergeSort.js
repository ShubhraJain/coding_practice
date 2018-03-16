// Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]

var mergeSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  var first = mergeSort(array.slice(0, array.length / 2));
  var second = mergeSort(array.slice(array.length / 2));
  var i = 0, j = 0;
  var res = [];
  while ( i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      res.push(first[i]);
      i++;
    } else {
      res.push(second[j]);
      j++
    }
  }
  while ( i === first.length && j < second.length ) {
    res.push(second[j]);
    j++;
  }
  while ( i < first.length && j === second.length ) {
    res.push(first[i]);
    i++;
  }
  return res;
};
console.log(mergeSort([34,7,23,32,5,62]))