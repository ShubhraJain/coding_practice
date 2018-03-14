// Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.

var fibonacci = (n) => {
  if (n <= 0) {
    return null;
  }
  var res = [0, 1];
  var helper = (num) => {
    if (num === 1 || num === n + 1) {
      return res;
    }
    res.push(res[num - 1] + res[num - 2]);
    return helper(num + 1);
  }
  helper(2);
  return res;
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacci(10));