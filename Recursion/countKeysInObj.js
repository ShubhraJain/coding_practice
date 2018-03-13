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