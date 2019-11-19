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
  if(nums.length<0) return 0;  
  nums.sort((a,b)=>a-b)
  let sum = nums[0] + nums[1] + nums[nums.length-1]  
  let closestSum = sum;
  for(let i=0 ; i< nums.length-2; i++){
    let number = nums[i];
    let left = i+1,
    right = nums.length-1
    while(left<right){
      let tripletSum = number + nums[left] + nums[right];
      // difference between target - currentsum and target - closestSum
      // triplet can be bigger than target and still it can be a closestSum
      if (Math.abs(target - tripletSum) < Math.abs(target - closestSum)) {
        closestSum = tripletSum
      }
      if(tripletSum<=target){
        left++;
      }else{
        right--;
      }
    }
  }
  return closestSum;
};



let nums = [-1, 2, 1, -4],
target = 1;
threeSumClosest(nums,target)