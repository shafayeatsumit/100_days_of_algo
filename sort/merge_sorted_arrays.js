var merge = function (nums1, m, nums2, n) {
  let j = 0,
  i=0;
  while(i<nums1.length && j<n){
    if(nums1[i]>nums2[j]){    
      nums1.splice(i,0,nums2[j])      
      nums1.pop()
      m++;      
      j++;
    }
    i++;
  }
  while(j<n){
    nums1[m] = nums2[j]
    j++;
    m++
  }    
};

let nums1 = [1, 2, 4, 5, 6, 0],
m = 5,
nums2 = [3],
n = 1;

merge(nums1,m,nums2,n)