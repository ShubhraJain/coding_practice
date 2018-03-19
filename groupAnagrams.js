// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]


var groupAnagrams = function(strs) {
  var anagrams = {};
  var sortedString;
  strs.forEach(function(str){
    sortedString = sortString(str);
    if(anagrams.hasOwnProperty(sortedString)){
      anagrams[sortedString].push(str);
    }
    else{
      anagrams[sortedString] = [str];
    }
  });
  return Object.values(anagrams);
}

function sortString(str){
  return str.split("").sort().join("");
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));