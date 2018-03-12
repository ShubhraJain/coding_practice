// Write a function that reverses a string.

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

console.log(reverse('abc'));
console.log(reverse('a'));
console.log(reverse(''));
console.log(reverse('orangutan'));
console.log(reverse('I love javascript'));