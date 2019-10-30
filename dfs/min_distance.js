/**
 * Minimum Distance Between BST Nodes value
 * 
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

function minDistance(root){
  let Q = [root];
  let min = null;
  while(Q.length){    
    let levelSize = Q.length;
    for (let i = 0; i < levelSize; i++) {      
      let node = Q.shift();
      let nodeVal = node.val;
      if (node.left){
        let leftVal = node.left.val;
        let d = Math.abs(nodeVal-leftVal)
        if(min === null) {
          min = d
        }else{
          min = Math.min(min, d);
        }                
        Q.push(node.left)
      } 
      if (node.right){
        let rightVal = node.right.val;
        let d = Math.abs(nodeVal-rightVal)
        if(min===null){
          min = d;
        } else{
          min = Math.min(min, d);
        }       
        
        Q.push(node.right)
      } 
    }    
  }
  if(min!==null) return min
  return min;
}


var root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
let r = minDistance(root)
console.log(r)