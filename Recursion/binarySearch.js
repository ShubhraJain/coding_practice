// Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5

// without recursion
var binarySearch = (array, target) => {
  var min = 0;
  var max = array.length - 1;
  var mid = Math.floor((min + max) / 2);
  while (array[mid] !== target && min < max) {
    if (target > array[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    mid = Math.floor((min + max) / 2);
  }
  return (array[mid] !== target) ? -1 : mid;
};

// using recursion
function binarySearchRecursion(arr, target, start=0, stop=(arr.length-1)) {
  var mid = Math.floor(((stop - start)/2) + start);
  if (arr[mid] === target) {
    return mid;
  } else if ( start >= stop) {
    return -1;
  } else if (arr[mid] < target) {
    return binarySearchRecursion(arr, target, mid + 1, stop);
  } else {
    return binarySearchRecursion(arr, target, start, mid);
  }
}
var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(binarySearchRecursion(array, 10))
console.log(binarySearchRecursion(array, 0))
console.log(binarySearchRecursion(array, 20))
console.log(binarySearchRecursion(array, 5))
console.log(binarySearchRecursion(array, 7))
console.log(binarySearchRecursion(array, 14))
console.log(binarySearchRecursion(array, 15))
console.log(binarySearchRecursion(array, 9))