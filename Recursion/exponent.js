// Compute the exponent of a number.

var exponent = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 1 / base * exponent(base, exp + 1).toFixed(4);
  }
  return base * exponent(base, exp - 1);
}

console.log(exponent(8, 2));
console.log(exponent(12, 5));
console.log(exponent(4, 0));
console.log(exponent(9, 1));
console.log(exponent(4, -2));
console.log(exponent(5, -4));