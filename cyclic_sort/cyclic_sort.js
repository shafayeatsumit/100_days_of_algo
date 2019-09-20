

const cyclic_sort = function (nums) {
  let i = 0
  while(i<nums.length){    
    let indexShould = nums[i]-1;    
    if(indexShould !== i){
      [nums[indexShould], nums[i]] = [nums[i], nums[indexShould]] 
    }else{
      i++
    }
  }  
  console.log(nums)
  return nums;
}

let arr = [49, 15, 21, 23, 8, 30, 6, 61, 60, 29, 93, 35, 87, 14, 65, 22, 73, 85, 27, 97, 34, 81, 44, 12, 70, 18, 31, 7, 54, 41, 46, 96, 51, 13, 48, 71, 33, 50, 69, 25, 95, 24, 100, 91, 67, 28, 36, 63, 62, 3, 39, 42, 32, 92, 38, 77, 43, 64, 89, 55, 79, 26, 74, 75, 11, 19, 68, 40, 37, 88, 66, 4, 78, 53, 10, 9, 98, 20, 57, 5, 2, 45, 16, 72, 90, 17, 94, 58, 47, 99, 1, 86, 80, 56, 59, 84, 52, 83, 82, 76];
cyclic_sort([3, 1, 5, 4, 2])
cyclic_sort([2, 6, 4, 3, 1, 5])
cyclic_sort(arr)