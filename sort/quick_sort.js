function partition(A,start,end){  
  let swapIndex = start,  
  pivit = A[end];
  for(let i=start; i<end; i++){
    if(A[i]<=pivit){
      [A[i], A[swapIndex]] = [A[swapIndex], A[i]]
      swapIndex++;
    }    
  }
  [A[swapIndex], A[end ]] = [A[end ], A[swapIndex]]
  return swapIndex;
}

function quickSort(A,start,end){  
  if(start<end){
    let swapIndex = partition(A, start, end)        
    quickSort(A, start, swapIndex - 1)
    quickSort(A, swapIndex + 1, end)
  }  
}


let array = [7, 2, 1, 6, 8, 5, 3, 4];
let result = quickSort(array,0,array.length-1)
console.log(array)

