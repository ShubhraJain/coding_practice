// Sum all integers below a given integer

var sumBelow = ( number ) => {
  if (number === 0) {
    return 0;
  }
  if (number < 0) {
    return (number + 1) + sumBelow(number + 1);
  }
  return (number - 1) + sumBelow(number - 1);
}

console.log(sumBelow(7));
console.log(sumBelow(1));
console.log(sumBelow(0));
console.log(sumBelow(-1));
console.log(sumBelow(-2));
console.log(sumBelow(-7));
console.log(sumBelow(-11));