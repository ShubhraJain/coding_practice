// Given an array of integers, return indices of the two numbers such that they 
// add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not 
// use the same element twice.

var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; 
      } 
    }
  }
};

console.log(twoSum([3,2,4], 6));