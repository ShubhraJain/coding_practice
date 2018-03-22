// You are given an input array where each element represents the height of a line 
// of towers. 

// The width of every tower is 1.
// It starts raining. How much water is collected between the towers? 
// Eg. Input: [5, 2, 3, 2, 1, 3]
// Output: 4
// Visualization:

// '-' is water
//  '#' is a block

// #
// #
// # - # - - #
// # # # # - #
// # # # # # #
// each position will fill to a level equal to the smaller of the highest tower 
// to the left and the highest tower to the right.

// Find, by a rightward scan, the highest tower to the left of each position
// find, by a leftward scan, the highest tower to the right of each position
// take the minimum at each position and add them all up.
function tallestTower(towers) {
  return Math.max.apply(null, towers);
}

function tallestLeftTower(towers, currTowerIndex) {
  return tallestTower(towers.slice(0, currTowerIndex));
}

function tallestRightTower(towers, currTowerIndex) {
  return tallestTower(towers.slice(currTowerIndex + 1));
}

var waterCollected = function(towers) {
  var totalWaterCollected = 0;
  for (var i = 0; i < towers.length; i++) {
    var middleTower = towers[i];
    var tallestLeft = tallestLeftTower(towers, i);
    var tallestRight = tallestRightTower(towers, i);
    var currWaterHeight = Math.min(tallestLeft, tallestRight) - middleTower;
    totalWaterCollected += Math.max(currWaterHeight, 0);
  }
  return totalWaterCollected;
}

console.log(waterCollected([5, 2, 3, 2, 1, 3]))
