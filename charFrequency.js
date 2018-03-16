// Write a function that takes as its input a string and returns an array of
// arrays sorted in descending order by frequency and then by
// ascending order by character.

var characterFrequency = (string) => {
  var res = [];
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    obj[string[i]] = obj[string[i]] + 1 || 1;
  }

  var letters = Object.keys(obj);
  for (var i = 0; i < letters.length; i++) {
    res.push([letters[i], obj[letters[i]]]);
  }
  res.sort( (a, b) => {
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
  res.sort( (a, b) => {
    return b[1] - a[1];
  });
  return res;
}

console.log(characterFrequency('mississippi'));
console.log(characterFrequency('mmmaaaiiibbb'));
console.log(characterFrequency('miaaiaaippi'));