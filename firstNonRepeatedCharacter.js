/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
    if (string.length === 0) {
      return null;
    }

    var temp = string[0]
    for (var i = 1; i < string.length; i++) {
      if (string[i] !== temp) {
        return string[i];
      } 
    }

    return temp;     
};


console.log(firstNonRepeatedCharacter('ABA'));
console.log(firstNonRepeatedCharacter('AACBDB'));
console.log(firstNonRepeatedCharacter(''));
console.log(firstNonRepeatedCharacter('A'));