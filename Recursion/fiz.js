/* Implement FizzBuzz. Given integer n, return an array of the string representations of 
1 to n.
For multiples of three, output 'Fizz' instead of the number.
For multiples of five, output 'Buzz' instead of the number.
For numbers which are multiples of both three and five, output “FizzBuzz” instead of the 
number.
fizzBuzz(5) // ['1','2','Fizz','4','Buzz'] */

var fizzBuzz = (number) => {
  var res = [];
  if (number < 1) {
    return res;
  }
  if (number === 3) {
    return res.concat(fizzBuzz(number - 1), 'Fizz');
  }
  if (number === 5) {
    return res.concat(fizzBuzz(number - 1), 'Buzz');
  }
  if (number % 3 === 0 && number % 5 === 0) {
    return res.concat(fizzBuzz(number - 1), 'FizzBuzz');
  }
  return res.concat(fizzBuzz(number - 1), number.toString());
}

console.log(fizzBuzz(5));