function searchFloorOfaNumber (arr, key){
  if(arr[0]>key) return -1;
  let start = 0,
  end = arr.length - 1;
  while(start<=end){
    let midIndex = Math.floor(start+(end-start)/2);    
    if(arr[midIndex] === key) return midIndex;
    if(arr[midIndex]>key){
      end = midIndex -1;
    }else{
      start = midIndex + 1;
    }
  }
  return end
}


console.log(searchFloorOfaNumber([4, 6, 10], 6));
console.log(searchFloorOfaNumber([1, 3, 8, 10, 15], 12));
console.log(searchFloorOfaNumber([4, 6, 10], 17));
console.log(searchFloorOfaNumber([4, 6, 10], -1));
