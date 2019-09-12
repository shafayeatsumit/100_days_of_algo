const max_sub_array_of_size_k = function (k, arr) {
  let maxSum = 0, 
  windowSum = 0,
  windowStart = 0;
  for(let windowEnd=0; windowEnd < arr.length ;windowEnd++){
    windowSum = windowSum + arr[windowEnd]
    
    if(windowEnd >= k-1){
      maxSum = Math.max(windowSum, maxSum)
      windowSum = windowSum - arr[windowStart]
      windowStart +=1
    }
  }
  return maxSum;
};

const arr = [2, 3, 4, 1, 5] 
const k = 2 

const r = max_sub_array_of_size_k(k,arr)
console.log(r)