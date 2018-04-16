// Given a non-negative integer num represented as a string, remove k digits from 
// the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.
// Output should not contain any leading zero


var removeKdigits = function(num, k) {
  if (num.length === k) {
    return '0';
  }
  var res = [];
  var lengthAfterDeletion = num.length - k;
  for (var i = 0; i < num.length; i++) {
    while (res.length > 0 && res[res.length - 1] > num[i] && k > 0) {
      res.pop();
      k--;
    }
    res.push(parseInt(num[i]));
  }
  if (k > 0) {
    while (k > 0) {
      var max = Math.max(...res);
      var id = res.indexOf(max);
      res.splice(id, 1);
      k--;
    }
  }
  var j = 0;
  while (res[j] === 0) {
    res = res.slice(1);
  }
  res = res.join('');
  if (res === '') {
    return '0'
  }
  return res;
};

console.log(removeKdigits('112', 1));
console.log(removeKdigits('10200', 1));
console.log(removeKdigits('10', 2));
console.log(removeKdigits('9', 1));
console.log(removeKdigits('1432219', 3));