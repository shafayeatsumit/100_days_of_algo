function TreeNode(value){
  this.value = value;
  this.left = null;
  this.right = null;  
}

function find_paths_recursive(root, currentPath, sequence){
  currentPath = [...currentPath, root.value]
  if(!root.left && !root.right && JSON.stringify(sequence) === JSON.stringify(currentPath)){
    return true;
  }
  
  if(root.left) find_paths_recursive(root.left,currentPath, sequence)
  if (root.right) find_paths_recursive(root.right, currentPath, sequence)
}

const find_path = function (root, sequence) {
  let currentPath = []
  let result = find_paths_recursive(root, currentPath, sequence)
  return result;
};

let root = new TreeNode(1);
root.left = new TreeNode(7)
root.right = new TreeNode(9)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(9)
find_path(root, [1, 9, 9])