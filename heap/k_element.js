function FindLargestKNumbers (nums, K){
  this.kNumbers = [];    
  for(let i=0; i<K;i++){    
    this.kNumbers.push(nums[i])
  } 
  
  // create a min heap  
  this.minHeapify(this.kNumbers)

  for(let i=K;i<nums.length;i++){
    this.addNum(nums[i])
  }
  return this.kNumbers
}

function minHeapifyHelper(Heap, indx){
  let leftIndx = (indx*2) + 1,
  rightIndx = (indx * 2) + 2,
  heapSize = Heap.length,
  small = indx;
  if(leftIndx<heapSize && Heap[leftIndx]<Heap[small]) small = leftIndx
  if(rightIndx<heapSize && Heap[rightIndx]<Heap[small]) small = rightIndx
  if(small !== indx){
    [Heap[small], Heap[indx]] = [Heap[indx], Heap[small]]
    minHeapifyHelper(Heap,small)
  }
}

FindLargestKNumbers.prototype.minHeapify = function(nums){    
  let lastParentIndex = Math.ceil(nums.length / 2) - 1;  
  for (let i = lastParentIndex; i >= 0; i--) {
    minHeapifyHelper(nums,i)
  }  
  this.kNumbers = nums;
}

FindLargestKNumbers.prototype.addNum = function(number){
  let firstElement = this.kNumbers[0];  
  if(firstElement<number) {
    this.kNumbers.shift()
    this.kNumbers.push(number)
    this.minHeapify(this.kNumbers)
  }
  
}

let sample = [5, 12, 11, -1, 12];

let Knumbers = new FindLargestKNumbers(sample, 3)
console.log(Knumbers)