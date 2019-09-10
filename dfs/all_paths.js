
function TreeNode (val){  
  this.val = val;
  this.left = null;
  this.right = null;  
}


function find_paths(root, sum) {
  let allPaths = [];
  find_paths_recursive(root, sum, [], allPaths);
  return allPaths;
}


function find_paths_recursive(root, sum, currentPath,allPaths) {
  if(root) currentPath.push(root.val)
  if(!root.left && !root.right && root.val === sum){    
    allPaths.push([...currentPath])
  }
  if (root.left) find_paths_recursive(root.left, sum - root.val, currentPath, allPaths)
  if (root.right) find_paths_recursive(root.right, sum - root.val, currentPath, allPaths)
  currentPath.pop()
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
let result = find_paths(root, sum);
console.log(result)