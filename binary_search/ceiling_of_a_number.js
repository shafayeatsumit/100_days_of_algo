function search_ceiling_of_a_number(arr, key) {  
  if(arr[arr.length-1]<key) return -1;
  let start = 0,
  end = arr.length-1;
  while(start <= end){
    let midIndex = Math.floor(start+(end-start)/2);    
    if(arr[midIndex]===key) return arr[midIndex]
    if(key>arr[midIndex]){
      start = midIndex +1;
    }else{
      end = midIndex -1;
    }  
  }   
  return  arr[start];
}


console.log(search_ceiling_of_a_number([4, 6, 10], 6));
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_ceiling_of_a_number([4, 6, 10], 17));
console.log(search_ceiling_of_a_number([4, 6, 10], 5));