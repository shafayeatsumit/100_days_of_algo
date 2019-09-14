/**
 * Given a binary tree where each node can only have a digit (0-9) value, 
 * each root-to-leaf path will represent a number. 
 * Find the total sum of all the numbers represented by all paths.
 */

 function Node(value){
   this.value = value;
   this.right = null;
   this.left = null;
 }

 function sumOfPathsRecursive(root, currentTotal, allTotal){  
  currentTotal = (currentTotal * 10) + root.value  
  // TOASK: why currentTotal and allTtal is not keeping reference in this one but 
  // keeping in all_pats.js
  if(!root.left && !root.right){
    allTotal = allTotal + currentTotal
  }  
  if (root.left) sumOfPathsRecursive(root.left, currentTotal, allTotal)
  if(root.right) sumOfPathsRecursive(root.right, currentTotal, allTotal)
  console.log(allTotal)
 }

 function sumOfPaths(root){
  let currentTotal = 0,
  allTotal = [];
  sumOfPathsRecursive(root,currentTotal,allTotal)
  
 }

 const root = new Node(1)
 root.left = new Node(7)
 root.right = new Node(9)
 root.right.left = new Node(2)
 root.right.right = new Node(9)
 sumOfPaths(root)