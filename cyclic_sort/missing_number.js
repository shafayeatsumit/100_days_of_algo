

const find_missing_number = function (nums) {
  let i = 0;
  let missing = []
  while(i<nums.length){
    let indexShould = nums[i]
    if(indexShould<nums.length && nums[indexShould]!==nums[i]){
      [nums[i], nums[indexShould]] = [nums[indexShould],nums[i]]
    }else{
      i++
    }    
  }
  for (i = 0; i < nums.length; i++) {
    let expectedNumber = nums[i]
    if (expectedNumber !== i) {
      missing.push(i)
      
      
    }
  }  
  return missing
};

let result = find_missing_number([0,2,4])
console.log(result)