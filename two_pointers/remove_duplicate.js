const removeDuplicates = function (nums) {
  let p = 0; // next to non duplicates
  for (i = 0; i < nums.length;i++){
    if (nums[i]!==arr[p]){
      p++
      [nums[p], nums[i]] = [nums[i], nums[p]]
    }
  }
  console.log(nums)  
  return p+1;
};

// var removeDuplicates = function (nums) {
//   let p = 0;
//   for (let i = 0; i < nums.length; i++) {    
//     if (nums[p] !== nums[i]) {
//       nums[p] = nums[i]
//     }
//     if (nums[p] !== nums[p - 1]) p++    
    
//   }
//   return p
// };

let arr = [2, 3, 3, 3, 6, 9, 9];
let r = removeDuplicates(arr)
console.log(r)
