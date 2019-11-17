/**
 * Given a binary tree, find the length of its diameter. 
 * The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. 
 * The diameter of a tree may or may not pass through the root.
 */

 /**
  * Given a binary tree
  * [1,2,3,4,5]
  * Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
  */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;  
};



function diameterOfBinaryTree(root) { 
  let diameter = 0;
  function maxDepth(node){
    if(!node) return 0;
    let left = maxDepth(node.left)
    let right = maxDepth(node.right)
    let d = 1+left+right
    diameter = Math.max(d,diameter)  
    return 1+Math.max(left,right)
  }
  maxDepth(root)
  return diameter;
}



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
let r = diameterOfBinaryTree(root)
console.log(r)
// console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)