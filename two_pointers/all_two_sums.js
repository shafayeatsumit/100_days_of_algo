function twoSums(nums,target){
  let result = [],
  left = 0,
  right=nums.length-1;
  while(left<right){
    let sum = nums[left] + nums[right];
    if(sum===target){
      result.push([nums[left],nums[right]])
      left +=1;
      right -=1;
      while(left<right && nums[left-1]===nums[left]) left +=1
      while(left<right && nums[right+1]===nums[right]) right -=1
    }else if(sum>target){
      right -=1;
    }else{
      left +=1;
    }
  }
  return result;
}

let result = twoSums([-2,0,0,1,1,2,2],2);
console.log(result)