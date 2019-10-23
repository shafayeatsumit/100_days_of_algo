/**
 * Given an array nums of n integers, 
 * are there elements a, b, c in nums such that a + b + c = 0? 
 * Find all unique triplets in the array which gives the sum of zero.
 */
/**
 * process:
 * sort ,
 * iterate and skip if similar,
 * two sum and skip same numbers if get's matched; (eg:[-2, 0, 0, 2, 2])
 */

function threeSum(nums) {
  nums.sort((a,b)=>a-b)
  let triplet = [];
  for(let i=0;i<nums.length-2;i++){
    if(nums[i]===nums[i-1]) continue
    let restOfArray = nums.slice(i+1,nums.length)
    let target = -nums[i]
    twoSum(target,restOfArray,triplet)
  } 
  return triplet;
}


function twoSum(target,arr, result) {
  let left = 0,
  right = arr.length-1;  
  while(left<right){
    let sum = arr[left] + arr[right];
    if(target === sum){
      result.push([-target,arr[left],arr[right]])
      left +=1;
      right -=1;
    }else if(target>sum){
      left += 1;      
    }else{
      right -= 1;
    }
  }
}


// console.log(threeSum([-3, 0, 1, 2, -1, 1, -2]));
// console.log(threeSum([-5, 2, -1, -2, 3]));

// let result = threeSum([-1, 0, 1, 2, -1, -4])
let result = threeSum([-2, 0, 0,1,1, 2, 2]) // this is the edge case
// let result = twoSum([2, 7, 11, 15],9)
console.log(result)