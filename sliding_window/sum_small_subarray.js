const smallest_subarray_with_given_sum = function (s, nums) {  
  let windowStart = 0,
  windowSum = 0,
  minLen = nums.length+1;
  for (windowEnd = 0; windowEnd < nums.length;windowEnd++){
    windowSum = windowSum + nums[windowEnd]
    while(windowSum>=s){
      let windowLength = (windowEnd - windowStart)+1;      
      minLen = Math.min(minLen, windowLength)
      windowSum = windowSum - nums[windowStart]
      windowStart = windowStart + 1
    }
    
  }
  if (minLen === nums.length + 1) return 0
  return minLen;
};

let a = [3, 4, 1, 1, 6]
let s = 8 
let result = smallest_subarray_with_given_sum(s,a)
console.log(result)