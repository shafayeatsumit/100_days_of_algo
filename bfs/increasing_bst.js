function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


function increasingBST (root){  
  let result = new TreeNode(0)
  let node = result  
  function increasingBSTRecursive(root){
    if (root.left) increasingBSTRecursive(root.left)
    node.right = new TreeNode(root.val)
    node = node.right
    if (root.right) increasingBSTRecursive(root.right)
  }  
  increasingBSTRecursive(root)
  return result.right
}

var root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)

root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

root.right.right = new TreeNode(8)
root.right.right.left = new TreeNode(7) 
root.right.right.right = new TreeNode(9)
let r = increasingBST(root)
console.log(JSON.stringify(r))
let r1 = increasingBST(new TreeNode(212))
console.log(JSON.stringify(r1))