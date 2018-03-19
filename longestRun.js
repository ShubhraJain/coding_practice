/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 */

var longestRun = (string) => {
  var max = [0, 0];
  var curr = [0, 0];
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      curr[1] = i;
      if (curr[1] - curr[0] > max[1] - max[0]) {
        max = curr;
      } 
    } else {
      curr = [i, i];
    }
  }
  return max;
}

console.log(longestRun(''))
console.log(longestRun('abbbcc'))
console.log(longestRun('aabbc'))
console.log(longestRun('abcd'));

var repeat = function (input, n) {
  var output = '';
  for (var i = 0; i < n; i++) {
    output = output + input;
  }
  return output;
};
var aaaa = repeat('a', 342);  // repeat `a` 342 times
var jjjj = repeat('j', 583);  // repeat `j` 583 times
var zzzz = repeat('z', 1000); // repeat `z` 1000 times
var input = aaaa + zzzz + jjjj;
console.log(longestRun(input)); //[342, 1341])