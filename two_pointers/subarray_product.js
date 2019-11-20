/**
 * Subarray Product Less Than K
 * first solution finds all the sumbarrays less than K
 * second one finds number of subarrays less than K
 * LeetCode Problem: 713
 * Given an array with positive numbers and a target number, 
 * find all of its contiguous subarrays whose product is less than the target number.
 * Input: [2, 5, 3, 10], target=30
 * Output: [2], [5], [2, 5], [3], [5, 3], [10]
 * Input: [8, 2, 6, 5], target=50
 * Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
 */

const find_subarrays = function (arr, target) {
  let result = [];
  let windowStart = 0;
  let product = 1;
  for(let windowEnd=0; windowEnd<arr.length; windowEnd++){
    product = product * arr[windowEnd]    
    while(product>=target){
      product = product/arr[windowStart];
      windowStart++;      
    }        
    const tempList = [];
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from lef to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    for (let i = windowEnd; i > windowStart - 1; i--) {      
      tempList.unshift(arr[i]);
      result.push(tempList.slice());
    }        
  }  
  return result;
};

let array = [2, 5, 3, 10]
let result = find_subarrays(array, 30)
// console.log(result)

const numSubarrayProductLessThanK = function (nums,k){
  if(k<1) return 0;
  let prod = 1;
  let left = 0;
  let ans = 0;
  for( let right=0; right<nums.length; right++){
    prod = prod * nums[right];
    while(prod>=k){
      prod = prod/nums[left];
      left++;
    }
    // Then, the number of intervals with subarray product less than k and with right - most coordinate right, 
    // is right - left + 1. We'll count all of these for each value of right.    
    ans = ans + (right-left+1)
  }
  return ans;
}
let r = numSubarrayProductLessThanK([10, 5, 2, 6], 100)
//console.log(r)
