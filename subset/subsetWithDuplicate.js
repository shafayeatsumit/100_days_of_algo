const find_subsets = function (nums) {
  let subsets = [[]];  
  for(let i=0;i<nums.length;i++){
    let levelSize = subsets.length;    
    for(let j=0;j<levelSize;j++){
      let elem = subsets[j]
      if(nums[i] === nums[i-1]) subsets.push([...elem,nums[i]])
    }
  }
  console.log(subsets)
  return subsets;
};

find_subsets([1, 3, 3])
// console.log(`Here is the list of subsets: ${find_subsets([1, 3, 5])}`)
// console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`)