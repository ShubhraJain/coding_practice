// Given an integer array, output all pairs that sum up to a specific value k

var pairSum2 = (arr, k) => {
  var seen = new Set();
  var output = [];
  
  for (var j =0; j < arr.length; j++) {
    var target = k - arr[j];
    if (!seen.has(target)) {
      seen.add(arr[j]);
    } else {
      output.push([arr[j], target]);
    }
  }
  return output;
}

console.log(pairSum2([3, 4, 1, 2, 5, 1, 3, 4, 1, 2, 5, 1], 6))