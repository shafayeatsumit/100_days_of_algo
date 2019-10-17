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
  function maxDepth(root) {
    if (!root) return 0
    let leftHeight = maxDepth(root.left)
    let rightHeight = maxDepth(root.right)
    let newDiameter = leftHeight + rightHeight
    diameter = Math.max(diameter, newDiameter)
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }
  maxDepth(root)
  return diameter
}



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
diameterOfBinaryTree(root)
// console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)