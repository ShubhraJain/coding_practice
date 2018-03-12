// Calculate the factorial of a number.

var factorial = (number) => {
  if (typeof number !== 'number') {
    return null;
  }
  if (number < 0) {
    return null;
  }
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(-1));
console.log(factorial(10));
console.log(factorial('asa'));