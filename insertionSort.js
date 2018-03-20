// Sort an array using insertion sort

var insertionSort = (array) => {
  for (var i = 1; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    for (; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort([6, 5, 3, 1, 8, 7, 4, 2]));