/**
 * Given a binary tree where each node can only have a digit (0-9) value, 
 * each root-to-leaf path will represent a number. 
 * Find the total sum of all the numbers represented by all paths.
 */

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
};


const find_sum_of_path_numbers = function (root) {  
  let num = 0,
  sum=0;
  function findTotalSumRecursive(node,num, sum){
    if(!node) return 0
    num = (num*10) + node.val;    
    if(!node.left && !node.right) return sum +=num       
    return findTotalSumRecursive(node.left,num, sum) + findTotalSumRecursive(node.right,num, sum)
  }
  return findTotalSumRecursive(root, num, sum)         
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
let result = find_sum_of_path_numbers(root)
console.log(result)