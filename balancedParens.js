// Write a function that takes a string of text and returns true if
// the parentheses are balanced and false otherwise.

var balancedParens = (string) => {
  var pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  var stack = []
  for (var i = 0; i < string.length; i++) {
    if (pairs[string[i]]) {
      stack.push(string[i]);
    } else if (string[i] === '}' ||
               string[i] === ')' ||
               string[i] === ']') {
      return (pairs[stack.pop()] === string[i]);
    }
  }
  return stack.length === 0;
}

console.log(balancedParens('[[[{{{((()))}}}]]]')); 
console.log(balancedParens('[({})]'));   
console.log(balancedParens('[(]{)}')); 
