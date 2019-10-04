function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree (array) {
  let rootNodeValue = array.shift()
  let root = new TreeNode(rootNodeValue)
  let Q = [root]
  while(array.length){
    let levelSize = Q.length
    for(i=0;i<levelSize;i++){
      let currentNode = Q.shift()
      if(!currentNode.left){
        let nodeValue = array.shift()
        if(nodeValue){
          let leftNode = new TreeNode(nodeValue)
          currentNode.left = leftNode
          Q.push(leftNode)
        }        
      }
      if(!currentNode.right){
        let nodeValue = array.shift()
        if (nodeValue) {
          let rightNode = new TreeNode(nodeValue)
          currentNode.right = rightNode
          Q.push(rightNode)
        }      
      }
    }
  }
  return JSON.stringify(root)
}
let array = [5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]
let result = buildTree(array)
console.log(result)