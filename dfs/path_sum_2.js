/**
 * Given a binary tree and a sum, 
 * find all root-to-leaf paths where each path's sum equals the given sum.
 * LeetCode problem Number: 113
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var pathSum = function (root, sum) {
  let allPaths = [];
  let currentPath = [];
  function pathSumRecursive(node, sum, currentPath){    
    if (!node) return    
    currentPath.push(node.val)
    if (!node.left && !node.right && sum === node.val) {      
      allPaths.push([...currentPath])      
    }
    pathSumRecursive(node.left, sum - node.val, currentPath)
    pathSumRecursive(node.right, sum - node.val, currentPath)
    // we could just slice the currentpath when passing as an argument    
    // that would use extreme amount of memory creating array every time.
    // inorder to avoid that we are doing this currentPath.pop()
    // and allPaths.push([...currentPath])
    currentPath.pop() 
  }
  pathSumRecursive(root,sum,currentPath)
  
  return allPaths;
};

var root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(8)

let result = pathSum(root,13)
console.log(result)
