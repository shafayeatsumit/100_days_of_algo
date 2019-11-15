function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var pathSum = function (root, sum) { 
  debugger 
  if (!root) return 0;
  if (!root.left && !root.right ){
    if(sum === root.val) {
      return 1;
    }else{
      return 0;
    }
  } 
  return pathSum(root.left, sum - root.val) + pathSum(root.right, sum - root.val) + pathSum(root, sum - root.val) 
}

var root = new TreeNode(1)
root.left = new TreeNode(7)
// root.right = new TreeNode(9)
// root.left.left = new TreeNode(6)
// root.left.right = new TreeNode(5)
// root.right.left = new TreeNode(2)
// root.right.right = new TreeNode(3)
let result = pathSum(root, 8)
console.log(result)