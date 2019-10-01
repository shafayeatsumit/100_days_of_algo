/**
  * Leet code 437. Path Sum III
  * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
  *  5 -> 3
  * 5 -> 2 -> 1
  * -3 -> 11
 */

class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

/**
 * 
 * why do we need to call paths sum for every left and right node
 * At first I just cannot figure out why pathSum needs to be called again.
 * Then I realized that it because each node could be exactly the sum itself.
 * If we only call pathSumFrom; the cases which node value == sum would be bypassed.
 * to repro
 * [10,7,3,1,null,null,4]
 */

var pathSumFrom = function(node, sum){
  if (!node) return 0;
    return (node.val === sum ? 1 : 0)
      + pathSumFrom(node.left, sum - node.val) + pathSumFrom(node.right, sum - node.val);

}


var pathSum = function (root, sum) {  
  if(!root) return 0;
  return pathSumFrom(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
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

console.log(`Tree has paths: ${pathSum(root, 8)}`)