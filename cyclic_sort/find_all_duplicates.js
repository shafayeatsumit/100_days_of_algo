/**
 * problem :We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
 * The array has some duplicates, find all the duplicate numbers without using any extra space.
 * Input: [3, 4, 4, 5, 5]
 * Output: [4, 5]
 * Input: [5, 4, 7, 2, 3, 5, 3]
 * Output: [3, 5]
 */

const findAllDuplicates = function (nums) {
  let i =0,
  allDuplicates = [];
  while(i<nums.length){
    let j = nums[i] -1;
    if(nums[j]!==nums[i]){
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }else{
      i++;
    }   
  }

  for(let i=0; i<nums.length; i++){
    let number = nums[i];
    if(number !== i+1) allDuplicates.push(number)
  }

  return allDuplicates;
};

let result = findAllDuplicates([5, 4, 7, 2, 3, 5, 3])
console.log(result)