function TreeNode (value) {  
  this.value = value;
  this.left = null;
  this.right = null;
  
}


const find_paths_recursive = function(root, sum, currentPath, allPaths){
  if(!root) return
  if(root){
    currentPath.push(root.value)
  } 
  if(!root.left && !root.right){
    allPaths.push(currentPath)    
    
  }
  
  if(root.left) find_paths_recursive(root.left,sum, currentPath ,allPaths)  
  
  if (root.right) find_paths_recursive(root.right, sum, currentPath, allPaths)
  
}

const find_paths = function (root, sum) {
  let allPaths = []
  find_paths_recursive(root, sum, [], allPaths)
  return allPaths
}



var root = new TreeNode(1)
root.left = new TreeNode(7)
root.right = new TreeNode(9)


root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

root.right.left = new TreeNode(2)
root.right.right = new TreeNode(7)
sum = 12
const r = find_paths(root, sum)
console.log(r)
// console.log(`Tree paths with sum: ${sum}: ${}`)