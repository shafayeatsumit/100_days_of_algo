function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

function maxSumPath(root){
  let maxSum = Number.MIN_SAFE_INTEGER;
  function sumRecursive(node){
    if(!node) return 0    
    let leftSum = sumRecursive(node.left)
    let rightSum = sumRecursive(node.right)
    let totalSum = leftSum + rightSum 
    maxSum = Math.max(maxSum, node.val)
    maxSum= Math.max(maxSum , leftSum+node.val)
    maxSum = Math.max(maxSum, rightSum + node.val)
    totalSum = totalSum  + node.val
    maxSum= Math.max(maxSum, totalSum)
    return totalSum    
  }  
  sumRecursive(root) 
  console.log(maxSum) 
  return maxSum  
}

var root = new TreeNode(2)
root.left = new TreeNode(-1)
root.right = new TreeNode(-2)
// root.left.left = new TreeNode(4)
// root.right.right = new TreeNode(6)
// root.right.left = new TreeNode(5)
maxSumPath(root)