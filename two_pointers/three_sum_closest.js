/**
 * Problem statement:
 * LeetCode: 16. 3Sum Closest.
 * Given an array nums of n integers and an integer target, 
 * find three integers in nums such that the sum is closest to target. 
 * Return the sum of the three integers. 
 * You may assume that each input would have exactly one solution.
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * Input: [-2, 0, 1, 2], target=2
 * Output: 1
 * Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
 * Input: [-3, -1, 1, 2], target=1
 * Output: 0
 * Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
 */





var threeSumClosest = function (nums, target) {
  nums.sort((a,b)=>a-b)
  let result = nums[0] + nums[1] + nums[nums.length -1]; //default left :nums[1] , default right: nums[nums.lenght -1]
  for(let i=0; i<nums.length-2; i++){
    let left = i+1,
    right = nums.length-1;    
    while(left<right){
      let tripletSum = nums[i]+nums[left]+nums[right];
      let resultMinDiff = Math.abs(target - result); // minimum difference between result and target
      let currentMinDiff = Math.abs(target - tripletSum); // minimum difference between current triplet sum and target
      if(currentMinDiff === 0) return tripletSum;
      if (currentMinDiff < resultMinDiff){
        result = tripletSum;
      }
      if(target>tripletSum){
        left +=1;
      }else{
        right -=1;
      }
    }
  }
  return result;
};

let nums = [0, 2, 1, -3],
target = 1;
threeSumClosest(nums,target)