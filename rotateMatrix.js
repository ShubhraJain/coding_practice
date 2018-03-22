// Write a function that rotates a NxN matrix 90 degrees.

// Example rotation of a 4x4 matrix:
// var matrix = [
//  [1,2,3,4],
//  [5,6,7,8],
//  [9,'A','B','C'],
//  ['D','E','F','G']
// ];
// matrix[0][0]; // 1
// matrix[3][2]; // 'F'
//  *
// var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
// // rotatedMatrix is:
// [ ['D',9,5,1],
//  ['E','A',6,2],
//  ['F','B',7,3],
//  ['G','C',8,4]
// ]
// rotatedMatrix[0][0]; // 'D'
// rotatedMatrix[3][2]; // 8

var rotateMatrix = (array) => {
  var res = [];
  var temp = [];
  for (var col = 0; col < array.length; col++) {
    for (var row = array.length - 1; row >= 0; row --) {
      temp.push(array[row][col]);
    }
    res.push(temp);
    temp = [];
  }
  return res;
}

var mat = [
  [1,2,3,4],
  [5,6,7,8],
  [9,'A','B','C'],
  ['D','E','F','G']
 ];

console.log(rotateMatrix(mat));