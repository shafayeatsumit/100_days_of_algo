function merge(arr){  
  let midIndx = arr.length/2;  
  let arrLength = arr.length;
  let left = arr.slice(0,midIndx);
  left.sort((a,b)=>a-b)
  let right = arr.slice(midIndx,arrLength)  
  right.sort((a,b)=>a-b)
  let leftSize = left.length,
  rightSize = right.length,
  i=j=k=0;
  while(i<leftSize && j<rightSize){  
    if(left[i]<=right[j]){
      arr[k] = left[i];
      i++;
    }else{
      arr[k] = right[j]
      j++;
    }
    k++;
  }
  while(i<leftSize){
    arr[k] = left[i];
    i++;
    k++
  }
  while(k<rightSize){
    arr[k] = right[j]
    j++;
    k++;
  }
  console.log(arr)
}


let result = merge([2,4,1,6,8,5,3,7])