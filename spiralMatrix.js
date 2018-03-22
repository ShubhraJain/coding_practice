// Given a matrix of m x n elements (m rows, n columns), return all elements of the 
// matrix in spiral order.

// For example,
// Given the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5].

var spiralOrder = (matrix) => {
  if (matrix.length < 1) {
      return [];
  }
  var res = [];
  var startRow = 0;
  var endRow = matrix.length - 1;
  var startCol = 0;
  var endCol = matrix[0].length - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (var i = startCol; i <= endCol; i++) {
      res.push(matrix[startRow][i]);
    }
    startRow++;
    for (var j = startRow; j <= endRow; j++) {
      res.push(matrix[j][endCol]);
    }
    endCol--;
    for (var k = endCol; k >= startCol && startRow <= endRow; k--) {
      res.push(matrix[endRow][k]);
    }
    endRow--;
    for (var l = endRow; l >= startRow && startCol <= endCol; l--) {
      res.push(matrix[l][startCol]);
    }
    startCol++;
  }
  return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]))
console.log(spiralOrder([[2, 3]]))
console.log(spiralOrder([[]]))