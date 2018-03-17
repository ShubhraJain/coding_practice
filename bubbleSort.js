// Implement bubble sort

var bubbleSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    // after each iteration, last i elements are already in place.
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([7, 2, 4, 8, 3, 9, 1, 99, 12, 54, 76, 21]))