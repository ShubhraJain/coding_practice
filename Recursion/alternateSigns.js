// Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = (array, res = []) => {
  if (array.length === 0) {
    return res;
  }
  if (res.length % 2 === 0) {
    res.push(Math.abs(array[0]));
  } else {
    res.push(-(Math.abs(array[0])));
  }
  return alternateSign(array.slice(1), res);
};

