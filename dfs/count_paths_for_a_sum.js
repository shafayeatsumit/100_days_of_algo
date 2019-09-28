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

const count_paths_recursive = function(root, sum, count){
  sum = sum - root.value
  if(!root.left && !root.right && sum === 0){
    count = count + 1
  }
  if(root.left){
    count_paths_recursive(root.left, sum, cou)
  }
  if(root.right){

  }
}

const count_paths = function (root, S) {
  let count = 0;
  count_paths_recursive(root,S, count)
  return -1
};


var root = new TreeNode(1)
root.left = new TreeNode(7)
root.right = new TreeNode(9)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(3)

console.log(`Tree has paths: ${count_paths(root, 11)}`)