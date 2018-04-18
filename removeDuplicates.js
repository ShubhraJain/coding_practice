// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

var deleteDuplicates = function(head) {
    var curr = head;
    
    while(curr) {
        if(curr.next !== null && (curr.val === curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    
    return head;
};