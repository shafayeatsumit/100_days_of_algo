const binary_search = function (arr, target) {
  let start = 0,
  end = arr.length-1,
  isAscending = arr[start]< arr[end];
  while(start<=end){
    let midIndex = Math.floor(start+(end-start)/2),
    mid = arr[midIndex];
    if(mid===target) return midIndex
    if(isAscending){
      if(target>mid){
        start = midIndex+1;
      }else{
        end = midIndex-1;
      }
    }else{
      if (target>mid){
        end = midIndex -1
      }else{
        start = midIndex + 1;
      }
    }
  }
  return -1;
};

// let r = binary_search([10,6,4],2)
// console.log(r)
// console.log(binary_search([4, 6, 10], 10))
//console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
//console.log(binary_search([10, 6, 4], 10))
console.log(binary_search([10], 4))