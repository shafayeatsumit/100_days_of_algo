class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};


const find_successor = function (root, key) {
  let successor = null;
  let Q = [root]
  while(Q.length){
    count = Q.length;
    for(let i=0;i<count;i++){
      let node = Q.shift()
      if (successor) {        
        return node
      } 

      if(node.value === key) successor = true
      if(node.left) Q.push(node.left)
      if(node.right) Q.push(node.right)      
    }    
  }
  return null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
console.log(result.value)
// if (result != null)
//   console.log(result.val)
// result = find_successor(root, 9)
// if (result != null)
//   console.log(result.val)