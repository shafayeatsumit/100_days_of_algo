var findDuplicate = function (nums) {
  let i = 0,
    start = 1;
  while (i < nums.length) {
    let j = nums[i] - start;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++;
    }
  }
  return nums[i - 1]  
};

let arr = [3, 1, 3, 4, 2];
let r = findDuplicate(arr)
console.log(r)