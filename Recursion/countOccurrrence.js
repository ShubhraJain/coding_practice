// Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

var countOccurrence = (array, value) => {
  var count = 0;
  if (array.length === 0) {
    return count;
  }
  if (array[0] === value) {
    count++;
  }
  return count + countOccurrence(array.slice(1), value)
}

console.log(countOccurrence([2,7,4,4,1,4], 4))
console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'))