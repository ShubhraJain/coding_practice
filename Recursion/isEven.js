// Check if a number is even without using mod or division.

var isEven = ( number ) => {
  number = Math.abs(number);
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  }
  return isEven( number - 2 );
}

console.log(isEven(5))
console.log(isEven(0))
console.log(isEven(-1))
console.log(isEven(-2))
console.log(isEven(100));
