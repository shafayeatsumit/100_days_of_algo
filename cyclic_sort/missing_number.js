const find_missing_number = function (nums) {
  nums.push(null)
  let i = 1;
  while(i<nums.length){    
    let indexShould = nums[i]    
    if(indexShould!==i){
      let temp = nums[indexShould]
      nums[indexShould] = nums[i]
      nums[i] = temp      
    }else{
      i++;
    }
    if(nums[i]===null ) i++
  }  
  for(let i=0;i<nums.length;i++){    
    if(nums[i]===null){     
      return i
    } 
  }
  
};

let result = find_missing_number([2, 6, 4, 3, 1, 0])
console.log(result)