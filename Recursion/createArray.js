// Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = (string) => {
  var res = [];
  if (string.length === 0) {
    return res;
  }
  return res.concat(string[0], createArray(string.slice(1)));
}

console.log(createArray('hello'))
console.log(createArray('this is not a pipe'))
console.log(createArray(''));
console.log(createArray('a'));