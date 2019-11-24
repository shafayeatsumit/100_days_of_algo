/**
 * Given a binary tree, return an array containing all the boundary nodes of the tree in an anti-clockwise direction.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const find_tree_boundary = function (root) {
  if (!root) return [];  
  let Q = [root];
  let leftView = [];
  let rightView = [];  
  let leafs = [];
  while(Q.length){
    let levelSize = Q.length;       
    for(let i=0; i<levelSize; i++){
      let node = Q.shift();
      if(!node.left && !node.right) continue
      if(i==0){
        leftView.push(node.val)
      }else if(i===levelSize-1){
        rightView.unshift(node.val)
      }      
      if(node.left) Q.push(node.left)
      if(node.right) Q.push(node.right)
    }    
  }    
  let leafNodes = findLeafs(root)
  return [...leftView , ...leafNodes, ...rightView];
};

function findLeafs(root){
  let leafs = [];
  function helper(node) {
    if(!node.left && !node.right) leafs.push(node.val)
    if(node.left) helper(node.left)
    if(node.right) helper(node.right)
  }
  helper(root)
  return leafs;
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(9);
root.left.right = new TreeNode(3);
root.left.right.left = new TreeNode(15);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(6);

let r = find_tree_boundary(root)
console.log(r)