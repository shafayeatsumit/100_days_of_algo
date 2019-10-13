

const find_missing_number = function (nums) {
  let i = 0;
  while(i<nums.length){
    let expected = nums[i]
    if(expected !== i && expected<nums.length){
      [nums[i], nums[expected]] = [nums[expected], nums[i]]
    }else{
      i++;    
    }
  }
  i = 0
  while(i<nums.length){
    let expected = nums[i]
    if(expected !== i) return i
    i++
  }
  return i
};

let result = find_missing_number([1])
console.log(result)