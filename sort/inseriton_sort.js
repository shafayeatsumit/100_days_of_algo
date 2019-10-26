function insertionSort(arr){
  for(let i=0; i<arr.length; i++){
    let number = arr[i];
    let hole = i
    while(hole>0 && arr[hole-1]> number){
      arr[hole] = arr[hole-1]
      hole -=1;
    }
    arr[hole] = number;
  }  
  return arr;
}

let sample = [7,2,4,1,5,3];
insertionSort(sample)