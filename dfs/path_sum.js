/**
 * path sum leet code:112
 */


function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var hasPathSum = function (root, sum) {
    if(!root) return false
    if(!root.left && !root.right && root.val === sum) return true
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};