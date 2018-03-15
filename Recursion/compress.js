// Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

var compress = (list, res = []) => {
  if (list.length === 0) {
    return res;
  }
  if (res[res.length - 1] !== list[0] || res.indexOf(list[0]) === -1) {
    res.push(list[0]);
  }
  return compress(list.slice(1), res);
};
