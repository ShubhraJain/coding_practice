// Given a roman numeral, convert it to an integer.

var romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
var romanToInt = function(s) {
    if (s.length < 1) {
        return null;
    }
    var result = 0;
    for (var i = 0; i < s.length - 1; i++) {
        if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
            result -= romanNumerals[s[i]];
        } else {
            result += romanNumerals[s[i]];
        }
    }
    result += romanNumerals[s[s.length - 1]];
    return result;
};

console.log(romanToInt('DCXXI'))