// Write a function that determines if a string is a palindrome.

var reverse = (string) => {
  var res = '';
  if (string.length === 0) {
    return res;
  }
  if (string.length === 1) {
    return string;
  }
  return string[string.length - 1] + reverse(string.slice(0, -1))
}


var isPalindrome = (string) => {
  return (string.toLowerCase() === reverse(string.toLowerCase()))
}

console.log(isPalindrome('malayalaM'));
console.log(isPalindrome('saippuakivikauppias'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('ma am'));
console.log(isPalindrome('malala'));
console.log(isPalindrome('a'));