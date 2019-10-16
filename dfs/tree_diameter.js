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
  let result = 0;
  function findDiameterRecursive(node, count){
    if(!node) return
    count +=1
    if(!node.left&&!node.right){
      // code here
    }
    if(node.left) findDiameterRecursive(node.left,count)
    if(node.right) findDiameterRecursive(node.right, count)
  }
  findDiameterRecursive(root,0)
  
}



// var treeDiameter = new TreeDiameter()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)

root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
diameterOfBinaryTree(root)
// console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)