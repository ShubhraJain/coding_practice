var coinSums = (coins, numOfCoins, amount) => {
  if (amount === 0) {
    return 1;
  } 
  if (amount < 0) {
    return 0;;
  }
  // no coins left but still amount is there
  if (amount > 0 && numOfCoins < 0) {
    return 0;
  }
  return coinSums(coins, numOfCoins, amount - coins[numOfCoins]) +
         coinSums(coins, numOfCoins - 1, amount);
}

var coins = [1, 2, 5, 10, 20, 50, 100, 200];
var numOfCoins = coins.length - 1;
console.log(coinSums(coins, numOfCoins, 16));