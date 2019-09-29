/**
  * Leet code 437. Path Sum III
  * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
  *  5 -> 3
  * 5 -> 2 -> 1
  * -3 -> 11
 */

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const count_paths_recursive = function(root,  sum, currentPath, target, allPaths ){
  sum = sum + root.value  
  currentPath = [...currentPath, root.value]  
  //console.log(currentPath)
  if(target<sum){
    let first = currentPath.shift()
    sum = sum - first
  }
  if(target === sum) {
    allPaths.push(currentPath)
    
  }
  if (root.left) count_paths_recursive(root.left, sum, currentPath, target, allPaths )
  if (root.right) count_paths_recursive(root.right, sum, currentPath, target, allPaths)
}

const count_paths = function (root, sum) {  
  let allPaths = [];  
  count_paths_recursive(root,0, [], sum, allPaths)
  console.log(allPaths)
  return allPaths.length
};


var root = new TreeNode(10)
root.left = new TreeNode(5)
root.right = new TreeNode(-3)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(1)
root.right.right = new TreeNode(11)

root.left.left.right = new TreeNode(-2)
root.left.left.left = new TreeNode(3)

console.log(`Tree has paths: ${count_paths(root, 8)}`)