/**
 * Given a binary tree and a number sequence, 
 * find if the sequence is present as a root-to-leaf path in the given tree.
 * Check if there is a root to leaf path with given sequence.
 */

function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;  
}

const find_path = function (root, sequence) {  
  function findPathRecursive(node,count){
    if(!node) return false
    if(node.val !== sequence[count])return false;        
    if (!node.left && !node.right && sequence.length === count+1) return true;
    return findPathRecursive(node.left, count+1) || findPathRecursive(node.right, count+1)
  }
  return findPathRecursive(root,count=0)  
};

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)