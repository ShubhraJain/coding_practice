// Write a function that multiplies two numbers without using the * operator or
// Math methods.

var multiply = (x, y) => {
  if (x === 0 || y === 0) {
    return 0;
  } 
  if ( y < 0 ) {
    return -x + multiply(x, y + 1);
  }
  if (y === 1) {
    return x;
  }
  return x + multiply(x, y - 1);
}

console.log(multiply(4, 2));
console.log(multiply(5, 1));
console.log(multiply(0, 0));
console.log(multiply(1, -5));
console.log(multiply(-1, 5));
console.log(multiply(-4, -2));