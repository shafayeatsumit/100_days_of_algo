/**
 * Leet Code : 124 
 * Given a non-empty binary tree, find the maximum path sum.
 * For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
 * The path must contain at least one node and does not need to go through the root.
 * =========================== *
 * test cases:
 * [-10,9,20,null,null,15,7] // 42
 * [-2,-1] // -1
 * [-1,null,9,-6,3,null,null,null,-2] // 12
 * [1,-2,3] // 4
 * [2,-1,-2] // 2
 * [-2,6,null,0,-6] // 6
 * [9,6,-3,null,null,-6,2,null,null,2,null,-6,-6,-6] // 16
 */

 /**
  * explain: This problem maximum has 4 situation: 
  * 1)pick root 
  * 2)pick left branch 
  * 3) pick right branch 
  * 4) pick branch go through root with positive left branch and right branch.
  * 
  */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

function maxSumPath(root){
  let maxSum = -Infinity;
  const maxPath = (node) => {
    if (!node) return 0;
    let left = maxPath(node.left);
    let right = maxPath(node.right);
    let maxLeftRight = Math.max(left, right); 
    maxSum = Math.max(node.val, maxSum) // pick root
    maxSum = Math.max(maxSum, node.val + maxLeftRight) // pick left or right
    maxSum = Math.max(maxSum, node.val + left + right) // pick root + left + right
    return node.val + Math.max(maxLeftRight, 0); // return max left or right
  }
  maxPath(root);
  return maxSum;
}

var root = new TreeNode(-2)
root.left = new TreeNode(3)
root.right = new TreeNode(2)
//root.right = new TreeNode(3)
// root.right = new TreeNode(3)
// root.right = new TreeNode(20)
// root.left = new TreeNode(9)
// root.right.right = new TreeNode(7)
// root.right.left = new TreeNode(15)

// var root = new TreeNode(1)
// root.left = new TreeNode(-2)
// root.right = new TreeNode(-3)
// root.right.left = new TreeNode(-2)
// root.left.left = new TreeNode(1)
// root.left.right = new TreeNode(3)
// root.left.left.left = new TreeNode(-1)

let r = maxSumPath(root)
console.log(r)