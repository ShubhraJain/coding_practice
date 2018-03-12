// Reverse the order of an array

var reverse = (array) => {
  var res = [];
  if (array.length === 0) {
    return res;
  }
  return res.concat(array[array.length - 1], reverse(array.slice(0, -1)));
}

console.log(reverse([1,2,3,4,5]));
console.log(reverse([8,6,4,2]));