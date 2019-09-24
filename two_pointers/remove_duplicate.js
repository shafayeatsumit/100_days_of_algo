const remove_duplicates = function (nums) {
  let p = 0; // next to duplicate
  for (i = 0; i < nums.length;i++){
    if (nums[i]!==arr[p]){
      p++
      [nums[p], nums[i]] = [nums[i], nums[p]]
    }
  }  
  return p+1;
};

let arr = [2, 3, 3, 3, 6, 9, 9];
let r = remove_duplicates(arr)
