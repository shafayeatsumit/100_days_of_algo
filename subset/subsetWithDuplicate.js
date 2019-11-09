const find_subsets = function (nums) {
  nums.sort((a,b)=>a-b)
  let subsets = [[]];    
  let startIndex = 0
  for (let i=0; i < nums.length; i++){
    let end = subsets.length;                 
    for(let j=startIndex;j<end;j++){          
      let elem = subsets[j];      
      let newElem = [...elem, nums[i]];
      subsets.push(newElem)      
    }            
    if (nums[i] === nums[i+1]){
      startIndex = end
    }else{
      // this is to reset, if multiple duplicate like [1, 1, 2, 2]
      // after the first first duplicate startIndex will remain the same.
      startIndex = 0
    }
    
  }
  console.log(subsets)
  return subsets;
};

find_subsets([1, 1, 2, 2])
// console.log(`Here is the list of subsets: ${find_subsets([1, 3, 5])}`)
// console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`)