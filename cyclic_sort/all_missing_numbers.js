const find_missing_numbers = function (nums) {
  missingNumbers = [];
  let i = 0;
  while(i<nums.length){
    let expected = nums[i]
    if (expected !== i && expected < nums.length && nums[expected] !== nums[i]){
      [nums[i],nums[expected]]=[nums[expected], nums[i]]
    }else{
      i++;
    }
  }
  i = 0
  while (i < nums.length) {
    let expected = nums[i]
    if (expected !== i) missingNumbers.push(i)    
    i++
  }   
  return missingNumbers;
};

find_missing_numbers([2, 4, 1, 2])