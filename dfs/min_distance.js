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
  let allNodes = []
  function findNodes(node){
    if(!node) return;     
    allNodes.push(node.val)
    findNodes(node.left)
    findNodes(node.right)
  }  
  findNodes(root)
  // finds the min distance among the elements of an integer array.
  allNodes.sort((a,b)=>a-b)
  let minVal = null;
  for(let i=0; i< allNodes.length -1;i++){
    let diff = Math.abs(allNodes[i+1] - allNodes[i])
    if(minVal === null){
      minVal = diff
    }else{
      minVal = Math.min(minVal, diff)
    }    
  }
  return minVal;
}

var root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
let r = minDistance(root)
console.log(r)