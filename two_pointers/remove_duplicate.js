/**
 * 
 * Leetcode problem: 26
 */

const removeDuplicates = function (nums) {
  if(nums.length === 0) return 0;
  let p = 0 ; // last non duplicates
  for(let i =0 ; i<nums.length; i++){
    if(nums[i]!==nums[p]){
      p++;
      nums[p] = nums[i]
    }
  }
  return p+1;
};



let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let r = removeDuplicates(arr)
console.log(r)
