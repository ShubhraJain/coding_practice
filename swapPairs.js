// Given a linked list, swap every two adjacent nodes and return its head.

// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.
// Leetcode link: https://leetcode.com/problems/swap-nodes-in-pairs/description/

var swapPairs = function(head) {
  var curr = head;
  if (!head || !head.next) {
      return head;
  }
  if (head.next) {
    head = head.next;
  }
  while (curr.next) {
    var temp = curr;
    if (curr.next) {
        curr = curr.next;
        temp.next = curr.next;
        curr.next = temp;
    }
    if (curr.next.next) {
      curr = curr.next.next;
        if (curr.next) {
            temp.next = curr.next;
        } else {
            temp.next = curr;
        }     
    } else {
        curr = curr.next;
    }
  }
  return head;
};