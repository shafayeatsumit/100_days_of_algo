const twoSum = function (nums, target) {
  let hash = {};
  let pairs = [];
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i]    
    if (hash[result] !== undefined) {
      pairs.push([i, hash[result]])
      delete hash[result] // to ignore duplicates the duplicates
    } else {
      hash[nums[i]] = i
    }
  }
  return pairs;
}

const r = twoSum([3, 2, 4, 4,2], 6)
console.log(r)