// Given a list of daily temperatures, produce a list that, for each day in the input, 
// tells you how many days you would have to wait until a warmer temperature. If there 
// is no future day for which this is possible, put 0 instead.

// For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your 
// output should be [1, 1, 4, 2, 1, 1, 0, 0]

var dailyTemperatures = function(temperatures) {
  var res = [];
  var j;
  var count = 1;
  for (var i = 0; i < temperatures.length - 1; i++) {
    if (temperatures[i] < temperatures[i + 1]) {
      res.push(1);
    } else {
      j = i;
      while (temperatures[i] >= temperatures[j + 1]) {
        count++;
        j++;
      }
      if (j < temperatures.length - 1) {
        res.push(count++);
      } else {
        res.push(0);
      }
      count = 1;
    }
  }
  res.push(0);
  return res;
};

console.log(dailyTemperatures([55,38,53,81,61,93,97,32,43,78]));
console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));
