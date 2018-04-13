// Delete array elements which are smaller than next or become smaller
// Given an array arr[] and a number k. The task is to delete k elements which are 
// smaller than next element (i.e., we delete arr[i] if arr[i] < arr[i+1]) or become 
// smaller than next because next element is deleted.
// k will always be greater than 0

var deleteElements = (arr, num) => {
  var count = 0;
  var stack = [arr[0]];
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      while (stack.length > 0 && count < num) {
        if (stack[stack.length - 1] < arr[i]) {
          stack.pop();
          count += 1;
        } 
      }
      stack.push(arr[i]);
    } else {
      stack.push(arr[i]);
    }
    if (count === num) {
      return stack.concat(arr.slice(i + 1));
    }
  }
}

console.log(deleteElements([3, 100, 1], 1));
console.log(deleteElements([20, 10, 25, 30, 40], 2));
console.log(deleteElements([23, 45, 11, 77, 18], 3));