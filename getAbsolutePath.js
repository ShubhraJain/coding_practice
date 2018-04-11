var path = 'C:/documents/jason/hey.txt';
// should print: C:/wow.c
var path2 = 'C:/./../files/./../../wow.c';

function realPath(pathStr) {
  var pathPieces = pathStr.split('/');
  var stack = [];
  stack.push(pathPieces[0]);
  for (var i = 1; i < pathPieces.length; i++) {
    if (pathPieces[i] === '.') {
      continue;
    }
    if (pathPieces[i] === '..') {
      if (stack.length > 1) {
        stack.pop();
      }
    } else {
      stack.push(pathPieces[i]);
    }
  }
  
  document.getElementById("path").innerText = stack.join('/');
}

realPath(path2);