// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 
// itself.

var addTwoNumbers = (l1, l2) => {
  var l1Numbers = [];
  var l2Numbers = [];
  while (l1) {
    l1Numbers.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    l2Numbers.push(l2.val);
    l2 = l2.next;
  }
  var result = [];
  var sum = 0;
  var carry = 0;
  var maxLength = Math.max(l1Numbers.length, l2Numbers.length);
  for (var i = 0; i < maxLength; i++) {
   if (l1Numbers[i] >= 0 && l2Numbers[i] >= 0) {
      sum = carry + l1Numbers[i] + l2Numbers[i];
    } else if (l1Numbers[i] >= 0 && !l2Numbers[i] >= 0) {
      sum = carry + l1Numbers[i];
    } else if (!l1Numbers[i] >= 0 && l2Numbers[i] >= 0) {
      sum = carry + l2Numbers[i];
    }
    if (sum > 9 ) {
      carry = 1;
      if (result.length === maxLength - 1) {
          sum = sum;
      } else {
       sum -= 10;
      }
    } else {
      carry = 0;
    }
    result[i] = sum;
    if (result.length === maxLength && result[result.length - 1] > 9) {
        result[result.length - 1] -= 10;
        result.push(1);
    }
  }
  return result;
}

