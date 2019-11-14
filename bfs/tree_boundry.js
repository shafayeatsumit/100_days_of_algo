/**
 * Given a binary tree, return an array containing all the boundary nodes of the tree in an anti-clockwise direction.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const find_tree_boundary = function (root) {
  var result = [],
  Q = [root];
  let level = 0;
  while(Q.length){
    var levelSize = Q.length;    
    
    for(let i=0, n =level ; i < levelSize; i++){
      let node = Q.shift();
      debugger
      if (!node.left && !node.right){
        result.splice(n,0, node.value)
        n++
        //result.push(node.value)
        continue
      }
      if(i===0){
        result.splice(n, 0, node.value)
        n++

      }else if(i+1 === levelSize){
        result.splice(n, 0, node.value)
        n++
      }        
      if(node.left) Q.push(node.left)
      if(node.right) Q.push(node.right)
    }    
    level += 1;    
  }    
  return result;
};



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
result = find_tree_boundary(root);

let r = find_tree_boundary(root)
console.log(r)