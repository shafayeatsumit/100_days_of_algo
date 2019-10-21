const pair_with_targetsum = function (nums, target) {
  let hash = {};
  let pairs = [];
  for(let i=0;i<nums.length;i++){
    let result = target - nums[i]
    debugger    
    if(hash[result]!==undefined){
      pairs.push([i, hash[result]])       
      delete hash[result] // to remove the duplicates
    }else{
      hash[nums[i]] = i
    }
  }  
  return pairs;
}

const r = pair_with_targetsum([3, 2, 4,4],6)
console.log(r)