// Compute the sum of an array of integers.
var sumOfIntegers = ( array ) => {
  if (array.length < 1) {
    return null;
  }
  if (array.length === 1) {
    return array[0];
  }
  return array[array.length - 1] + sumOfIntegers(array.slice(0, -1))
}
console.log(sumOfIntegers([]));
console.log(sumOfIntegers([1]));
console.log(sumOfIntegers([1, 2, 3, 4]));
console.log(sumOfIntegers([-3,-0,-34,-7,-18]));
console.log(sumOfIntegers([5, 9]));

// Sum all numbers in an array containing nested arrays.
var nestedArrayIntegersSum = ( array ) => {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
          sum += nestedArrayIntegersSum(array[i]);
      } else {
          sum += array[i];
      }
  }
  return sum;
};
console.log(nestedArrayIntegersSum([[1, 2], [1], [4, [5, 6]]]));
console.log(nestedArrayIntegersSum([[], [], []]));
console.log(nestedArrayIntegersSum([1, 2, 3, 4]));
