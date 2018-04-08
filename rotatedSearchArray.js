// Search for an element in rotated sorted array.
// Return true if present else return false

var rotatedSearchArray = (nums, target) => {
  var front = 0;
  var rear = nums.length - 1;
  while (front <= rear) {
    var mid = Math.ceil((front + rear) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[front] < nums[mid]) {
      if (nums[front] <= target && nums[mid] > target) {
        rear = mid - 1;
      } else {
        front = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[rear] >= target) {
        front = mid + 1;
      } else {
        rear = mid - 1;
      }
    }
  }
  return -1;
}