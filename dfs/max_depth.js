function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};


function maxDepth(root) {
  if(!root) return 0
  let leftHeight = maxDepth(root.left)
  let rightHeight = maxDepth(root.right)
  if(leftHeight>rightHeight){
    return leftHeight+1;
  }else{
    return rightHeight+1;
  }
}



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
let result = maxDepth(root)
