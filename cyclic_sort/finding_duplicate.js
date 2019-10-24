var findDuplicate = function (nums) {
  let i = 0,
    start = 1;      
  while (i < nums.length) {    
    let j = nums[i] - start;
    if (nums[i]!==i+1){
      
      if(nums[i]!==nums[j]){
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }else{        
        i++
      }
    }else{
      i++;
    }
  }
  console.log(nums)
  return -1  
};

let arr = [3, 1, 2, 5,4];
let r = findDuplicate(arr)
console.log(r)