const smallest_subarray_with_given_sum = function (s, arr) {  
 
  for (size=1; size<arr.length; size++) {
    let windowStart = 0,
      windowSum = 0;     
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum = windowSum + arr[windowEnd]
      if (windowEnd >= size - 1) {        
        if (windowSum >= s) return size
        windowSum = windowSum - arr[windowStart]
        windowStart++;
      }
    }
  }
  
  return -1;
};

let a = [3, 4, 1, 1, 6]
let s = 8 
let result = smallest_subarray_with_given_sum(s,a)
console.log(result)