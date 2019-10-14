function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;  
};


const pathSumBruteForce = function (root, sum) {
  if (!root) return 0;
  function pathSumRecursive(node, sum){
    if(!node) return 0        
    return  node.val ===sum? 1:0 + pathSumRecursive(node.left,sum-node.val) + pathSumRecursive(node.right, sum - node.val)
  }
  
  let r = pathSumRecursive(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
  return r
};

const pathSum = function (root, sum){
  if(!root) return 0;
  let count = 0;
  let cache = {0:1}
  function pathSumRecursive(node, currPathSum, cache, target){    
    currPathSum = currPathSum + node.val
    let oldPath = currPathSum - target   
    if(cache[oldPath]){
      count +=1
    }
    if (!cache[currPathSum]) cache[currPathSum] = 0
    cache[currPathSum] +=  1    
    if(node.left) pathSumRecursive(node.left, currPathSum, cache, target)
    if(node.right) pathSumRecursive(node.right, currPathSum, cache, target)
    cache[currPathSum] = cache[currPathSum] - 1   
  }
  pathSumRecursive(root,0,cache,sum)
  return count
}


var root = new TreeNode(1)
root.left = new TreeNode(1)
root.left.left = new TreeNode(2)
root.right = new TreeNode(3)

let result = pathSum(root, 1)
console.log(result)