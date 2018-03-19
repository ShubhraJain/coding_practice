// create board class

var Board = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    var row = [];
    board.push(row);
    for (var j = 0; j < n; j++) {
      row.push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasVisited = function(i, j) {
    return this[i][j];
  }
  return board;
}

var robotPaths = (n) => {
  var board = new Board(n);
  var paths = 0;
  var helper = function(i, j) { //takes in coordinates of the position
    if (i < 0 || i >= n || j < 0 || j >= n) { // robot is off the board
      return;
    }
    if (i === n - 1 && j === n - 1) { // robot has reached [n-1, n-1] coordinate or end
      paths++;
      return;
    }
    if (board.hasVisited(i, j)) {
      return;
    } else {
      board.togglePiece(i, j);
      helper(i + 1, j); // down
      helper(i - 1, j); // up
      helper(i, j + 1); // right
      helper(i, j - 1); // left
      board.togglePiece(i, j);
    }
  }
  helper(0, 0);
  return paths;
}

console.log(robotPaths(4));