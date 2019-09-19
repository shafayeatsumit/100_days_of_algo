const get_count = function (i,nums){
  let count = 0;
  for (j = i + 1; j < nums.length; j++) {
    let b = nums[j]
    if (b < nums[i]) {
      count = count + 1;
    }
  }
  return count
}

const swap = function(i,count , nums){
  let temp = nums[i]
  nums[i] = nums[count]
  nums[count] = temp
  
  return nums
}

const cyclic_sort = function (nums) {
  let i = 0
  while(i<nums.length){    
    count = get_count(i, nums)  
    if (count === 0) {
      i++
      continue
    }    

    nums = swap(i, count, nums)

  }
  console.log(nums)  
  return nums;
}


cyclic_sort([3, 1, 5, 4, 2])
cyclic_sort([2, 6, 4, 3, 1, 5])
cyclic_sort([1, 5, 6, 4, 3, 2])