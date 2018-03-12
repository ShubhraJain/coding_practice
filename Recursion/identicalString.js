// Write a function that compares each character of two strings and returns true if
// both are identical.

var identicalString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === '' && str2 === '') {
    return true;
  }
  if (str1[0] === str2[0]) {
    return identicalString(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
}

console.log(identicalString('house', 'houses'));
console.log(identicalString('tomato', 'motato'));
console.log(identicalString('tomato', 'tomato'));

