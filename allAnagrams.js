/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. 
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = (string) => {
  var results = [];

  var generateAnagrams = (text, word) => {
    if (text.length === string.length) {
      results.push(text);
    }
    for (var i = 0; i < word.length; i++) {
      generateAnagrams(text + word[i], word.slice(0, i) + word.slice(i + 1));
    }
  }
  generateAnagrams('', string);
  return results;
}

console.log(allAnagrams(''));
console.log(allAnagrams('a'));
console.log(allAnagrams('abc'));
console.log(allAnagrams('aaa'));
