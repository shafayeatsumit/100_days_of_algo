class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const traverse = function (root) {
  let result = [];
  let Q = [root]  
  while(Q.length>0){         
    let levelSize = Q.length
    let currentLevel = [];    
    for(i=0;i<levelSize;i++){
      let node = Q.shift();
      currentLevel.push(node.value)
      if(node.left) Q.push(node.left)
      if(node.right) Q.push(node.right)
    }
    result.push(currentLevel)
  }  
  
  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
const r = traverse(root)
console.log(r)