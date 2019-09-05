function TreeNode(value) {  
  this.value = value;
  this.left = null;
  this.right = null;  
}

const traverse = function (root) {
  console.log(root.value)
  if(root.left) traverse(root.left)
  if(root.right) traverse(root.right)
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

traverse(root)