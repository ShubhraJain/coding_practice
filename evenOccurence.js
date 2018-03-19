// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
// Return null if there are no even-occurrence items.

// example usage:
// var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
// console.log(onlyEven); //  4

var evenOccurrence = (array) => {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = !obj[array[i]];
  }
  for (var i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      return array[i];
    } 
  }
  return null;
}

var onlyEven = [1, 7, 2, 4, 5, 6, 2, 8, 9, 6, 4, 8];
console.log(evenOccurrence(onlyEven));