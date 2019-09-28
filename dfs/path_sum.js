/**
 * Given a binary tree and a sum, determine if the tree has 
 * a root-to-leaf path such that adding up all 
 * the values along the path equals the given sum.
 * path sum leet code:112
 */


function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var hasPathSum = function (root, sum) {
  sum = sum - root.val
  if(!root.left && !root.right){
    return sum === 0
  }
  if(root.left){
    let r = hasPathSum(root.left, sum)
    if(r) {
      return true
    }else{
      return false
    }
  }
  if(root.right){
    let r = hasPathSum(root.right, sum)
    if (r){
      return true
    }else{
      return false
    }
  }
};

var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)

const result = hasPathSum(root,13)
console.log(result)