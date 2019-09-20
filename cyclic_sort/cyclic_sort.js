

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
  return nums;
}


cyclic_sort([3, 1, 5, 4, 2])
cyclic_sort([2, 6, 4, 3, 1, 5])
cyclic_sort([1, 5, 6, 4, 3, 2])