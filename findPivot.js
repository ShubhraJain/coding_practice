// I have an array of words that are mostly alphabetical, except they start somewhere 
// in the middle of the alphabet, reach the end, and then start from the beginning of 
// the alphabet.
// In other words, this is an alphabetically ordered array that has been "rotated." 
// Write a function that returns the index of the pivot, or null if there is no pivot 
// (meaning the entire list of words is in alphabetical order). 

// For example:
// ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']
// // returns 3

var findPivot = (array, start = 0, end = array.length - 1) => {
  var middle = Math.ceil((start + end) / 2);
  if (array[start] < array[middle]) {
    if (middle === end) {
      return null;
    } else {
      return findPivot(array, middle, end);
    }
  } else {
    if (middle - start === 1) {
      return middle;
    } else {
      return findPivot(array, start, middle);
    }
  }
}

console.log(findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']));