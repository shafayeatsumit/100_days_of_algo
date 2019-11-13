class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


var rightSideView = function (root) {
  if(root === null) return [];
  let result = [],
  Q = [root];
  while(Q.length){    
    let levelSize = Q.length;    
    let levelChild = [];
    for(let i=0; i<levelSize; i++){
      let node = Q.shift();
      levelChild.push(node.value)
      if(node.left) Q.push(node.left)
      if(node.right) Q.push(node.right)
    } 
    result.push(levelChild.pop())
  }
  return result;  
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
rightSideView(root)