// Search for an element in rotated sorted array.
// Return true if present else return false

var rotatedSearchArray = (array, target) => {
  var front = 0;
  var rear = array.length - 1;
  while (front <= rear) {
    var mid = Math.floor((front + rear) / 2);
    if (array[mid] === target) {
      return true;
    }
    if (array[front] < array[mid]) {
      if (array[front] <= target && array[mid] > target) {
        rear = mid - 1;
      } else {
        front = mid + 1;
      }
    } else {
      if (array[mid] < target && array[rear] >= target) {
        front = mid + 1;
      } else {
        rear = mid - 1;
      }
    }
  }
  return false;
}

console.log(rotatedSearchArray([8, 9, 10, 1, 2, 3, 4, 5, 6, 7], 2))
console.log(rotatedSearchArray([8, 9, 10, 1, 2, 3, 4, 5, 6, 7], 8))
console.log(rotatedSearchArray([8, 9, 10, 1, 2, 3, 4, 5, 6, 7], 10))
console.log(rotatedSearchArray([8, 9, 10, 1, 2, 3, 4, 5, 6, 7], 23))
console.log(rotatedSearchArray([8, 9, 10, 1, 2, 3, 4, 5, 6, 7], 6))