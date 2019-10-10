function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;  
};


const pathSum = function (root, sum) {
  if (!root) return 0;
  function pathSumRecursive(node, sum){
    if(!node) return 0        
    return  node.val ===sum? 1:0 + pathSumRecursive(node.left,sum-node.val) + pathSumRecursive(node.right, sum - node.val)
  }
  
  let r = pathSumRecursive(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
  return r
};


var root = new TreeNode(1)
root.right = new TreeNode(2)
root.left = new TreeNode(3)
// root.left = new TreeNode(7)
// root.right = new TreeNode(9)

// root.left.left = new TreeNode(6)
// root.left.right = new TreeNode(5)

// root.right.left = new TreeNode(2)
// root.right.right = new TreeNode(3)

let result = pathSum(root, 3)
console.log(result)