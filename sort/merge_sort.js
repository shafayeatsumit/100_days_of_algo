function merge(mainArray, left, right){
  let i = 0, // left array index
  j=0, // right array index
  k=0; // mainArray  index

  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      mainArray[k] = left[i]
      i++;
      k++;
    }else{
      mainArray[k] = right[j]
      j++;
      k++;
    }
  }
  // adding left over of left Array
  while(i<left.length){
    mainArray[k] = left[i]
    i++;
    k++;
  }
  // adding left over of right Array
  while(j<right.length){
    mainArray[k] = right[j]
    j++;
    k++
  }
  
}

function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) return 
  
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  mergeSort(left)
  mergeSort(right)
  merge(unsortedArray,left,right)  
  return unsortedArray; // unsorted become sorted
}


let result = mergeSort([2,4,1,6,8,5,3,7,9])
console.log(result)