// Given a binary search tree, write a function kthSmallest to find the kth smallest 
// element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the 
// kth smallest frequently? How would you optimize the kthSmallest routine?
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var kthSmallest = function(root, k) {
  var res = [];
  var helper = function(root) {
    if (root.left) {
        helper(root.left);
    }
    res.push(root.val);
    if (root.right) {
        helper(root.right);
    }
  }
  helper(root);
  return res[k - 1];
};