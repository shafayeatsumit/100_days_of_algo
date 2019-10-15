class TreeNode {

  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
};


const find_sum_of_path_numbers = function (root) {
  let sum = 0,
  num = 0;
  function findTotalSumRecursive(node,num){
    if(!node) return 
    num = (num*10) + node.val;    
    if(!node.left && !node.right) sum += num
    return findTotalSumRecursive(node.left,num) + findTotalSumRecursive(node.right,num)
  }
  findTotalSumRecursive(root,num,sum)
  
  return sum
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
find_sum_of_path_numbers(root)