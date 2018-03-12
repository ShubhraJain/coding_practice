// Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.

var modulo = (x, y) => {
  if (x === 0 && y === 0) {
    return NaN;
  }
  if ( x < 0 && y < 0 && x > y) {
    return x;
  }
  if ( x < y && y > -1) {
    return x;
  }
  return modulo(x - y, y);
}

console.log(modulo(5, 2) === 5 % 2);
console.log(modulo(17, 5) === 17 % 5);
console.log(modulo(78, 453) === 78 % 453);
console.log(modulo(0, 32) === 0 % 32);
console.log(modulo(0, 0));
console.log(modulo(-79, 82) === -79 % 82);
console.log(modulo(-275, -502) === -275 % -502);
console.log(modulo(-275, -274) === -275 % -274);
