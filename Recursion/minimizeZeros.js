// Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = (array, res = []) => {
  if (array.length === 0) {
    return res;
  }
  if (res[res.length - 1] !== 0 || res.indexOf(array[0]) === -1) {
    res.push(array[0]);
  }
  return minimizeZeroes(array.slice(1), res);
};

console.log(minimizeZeroes([2,0,0,0,1,4]));
console.log(minimizeZeroes([2,0,0,0,1,0,0,4]));