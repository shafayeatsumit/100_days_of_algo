/**
 * Given a binary tree, return all root-to-leaf paths.
 * LeetCode: 257
 * 
 */


function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var binaryTreePaths = function (root) {
  let allPaths = [];
  function treePathsRecursive(node,currentPath){    
    if(!node) return 
    if(currentPath === ""){
      currentPath += node.val
    }else{
      currentPath = currentPath +  "->" + node.val;
    }
    if(!node.left && !node.right){
      allPaths.push(currentPath)
      return
    }
    treePathsRecursive(node.left,currentPath)
    treePathsRecursive(node.right, currentPath)
  }
  treePathsRecursive(root,"")
  return allPaths;
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

binaryTreePaths(root)

/**
 * Best ans from Leetcode
 * var binaryTreePaths = function(root) {
    var results = [];
    var helper = function(node, string) {
        if (!node) {
            return;
        }
        string += string ? `->${node.val}` : `${node.val}`;
        if (!node.left && !node.right) {
            results.push(string);
            return;
        } else {
            if (node.left) {
                helper(node.left, string);
            }
            if (node.right) {
                helper(node.right, string);
            }
        }
    }
    helper(root, "");
    return results;
};
 */