// Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}

var letterTally = (str, obj = {}) => {
  if (str.length === 0) {
    return obj;
  }
  obj[str[0]] = obj[str[0]] + 1 || 1;
  return letterTally(str.slice(1), obj);
};

console.log(letterTally('potato'));