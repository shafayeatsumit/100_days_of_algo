
function TreeNode (val){  
  this.val = val;
  this.left = null;
  this.right = null;  
}


function find_paths(root) {
  let allPaths = [];
  find_paths_recursive(root, [], allPaths);
  return allPaths;
}


function find_paths_recursive(root, currentPath, allPaths) {
  let value = root.val;
  currentPath = [...currentPath, value]  
  if(!root.left && !root.right){    
    allPaths.push(currentPath)
  }
  if (root.left) find_paths_recursive(root.left, currentPath, allPaths)
  if (root.right) find_paths_recursive(root.right, currentPath, allPaths)
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
let result = find_paths(root);
console.log(result)