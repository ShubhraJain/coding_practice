// Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = (obj, oldKey, newKey) => {
  for (var prop in obj) {
    if (prop === oldKey) {
      obj[newKey] = obj[prop];
      delete obj[prop];
    }
    if (typeof obj[prop] === 'object') {
      replaceKeysInObj(obj[prop], oldKey, newKey);
    }
  }
  return obj;
};

var input = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'};
console.log(replaceKeysInObj(input, 'y', 'u'));