class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const count_paths = function (root, sum) {
  let count = 0;
  function count_paths_recursive(node, sum){
    if(!node) return 0    
    if(sum === root.value) count = count + 1;
    return count_paths_recursive(node.left,sum - root.value) + count_paths_recursive(node.right, sum-root.value)
  }
  count_paths_recursive(root,sum) + count_paths_recursive(root.left, sum) + count_paths_recursive(root.right, sum)  
  return count
};


var root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.left.left = new TreeNode(4)
root.left.left.left.left = new TreeNode(5)

let result = count_paths(root, 3)
console.log(result)