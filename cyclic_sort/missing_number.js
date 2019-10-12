

const find_missing_number = function (nums) {
  nums.sort((a,b)=>a-b)
  let lastIndex = nums.length -1
  if(nums[0]!=0) return 0
  if (nums[lastIndex] !== nums.length) return nums.length
  for(let i=0;i<nums.length;i++){    
    if(nums[i] != i) return i
  }  
};

let result = find_missing_number([0])
console.log(result)