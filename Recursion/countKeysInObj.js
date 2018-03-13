// Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2

var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var prop in obj) {
    if (prop === key) {
      count++;
    }
    if (typeof (obj[prop]) === 'object') {
      count += countKeysInObj(obj[prop], key);
    } 
  }
  return count;
};

// Write a function that counts the number of times a value occurs in an object.
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var prop in obj) {
    if (obj[prop] === value) {
      count++;
    }
    if (typeof (obj[prop]) === 'object') {
      count += countValuesInObj(obj[prop], value);
    } 
  }
  return count;
};

var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(countValuesInObj(obj, 'r')); // 2
console.log(countValuesInObj(obj, 'e')); // 1