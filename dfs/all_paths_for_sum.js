function TreeNode (value) {  
  this.value = value;
  this.left = null;
  this.right = null;
  
}


const find_paths = function (root, sum) {
  allPaths = [];
  if(!root)  return false
  if(!root.left && !root.right && root.value ===sum) {      
      return [[root.value]]
  } 

  let left = find_paths(root.left, sum - root.value) 
  if(left){    
    let lastArr = left[left.length - 1]    
    lastArr.unshift(root.value)        
    console.log(lastArr)
    return left
  }
  
  let right = find_paths(root.left, sum - root.value)
  if(right){
    let lastArr = right[right.length - 1]    
    lastArr.unshift(root.value)    
    console.log(lastArr)
    return right
  }
  
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
const r = find_paths(root, sum)
console.log(r)
// console.log(`Tree paths with sum: ${sum}: ${}`)