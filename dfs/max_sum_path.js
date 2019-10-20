function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

function maxSumPath(root){
  let maxSum = Number.MIN_SAFE_INTEGER;
  function sumRecursive(node){
    if(!node) return 0
    let left = sumRecursive(node.left)
    let right = sumRecursive(node.right)        
    maxSum = Math.max(maxSum,left+right+node.val)
    let leftMax = Math.max(left, left+node.val)
    let rightMax = Math.max(right, right+node.val)
    return Math.max(leftMax,rightMax)
  }  
  sumRecursive(root)   
  return maxSum  
}

var root = new TreeNode(1)
root.left = new TreeNode(-2)
root.right = new TreeNode(-3)
root.right.left = new TreeNode(-2)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.left.left.left = new TreeNode(-1)

let r = maxSumPath(root)
console.log(r)