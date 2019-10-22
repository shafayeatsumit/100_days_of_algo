function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var hasPathSum = function (root, sum) {
  if(!root) return false
  if(!root.left && !root.right && sum===root.val) return true
  return hasPathSum(root.left,sum-root.val) || hasPathSum(root.right,sum-root.val)
};

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
let r = hasPathSum(root,4)
console.log(r)