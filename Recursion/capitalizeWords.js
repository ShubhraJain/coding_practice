// Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

var capitalizeWords = (array) => {
  var res = [];
  if (array.length === 0) {
    return res;
  }
  return res.concat(array[0].toUpperCase(), capitalizeWords(array.slice(1)));
};

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))