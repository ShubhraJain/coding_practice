// Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4

function gcd(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  if (x === y) {
    return x;
  } 
  if (x > y) {
    return gcd((x - y), y);
  } 
  return gcd(x, (y - x));
}

// console.log(gcd(8, 12));
// console.log(gcd(24,88));
// console.log(gcd(339,17));
// console.log(gcd(126,900));

var a = '2';
var b = 5
console.log((b + a) + '' + (b - a));
