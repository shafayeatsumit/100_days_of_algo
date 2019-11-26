/**
 * max hipyfy the following array
 * [5,12,64,1,37,90,91,97]
 * ans: [97,37,91,12,5,90,64,1]
 */

 // reviewed: 1,

// const sample = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]
const sample = [5, 12, 64, 1, 37, 90, 91, 97]


function maxHeapify(A,i){    
  let left = (2*i) + 1
  let right = (2 * i) + 2
  let largest = i
  if(left < A.length && A[left] > A[largest]) largest = left
  if (right < A.length && A[right] > A[largest]) largest = right
  if(largest !==i){
    let temp = A[i]
    A[i] = A[largest]
    A[largest] = temp
    maxHeapify(A, largest)
  }
}

function buildMaxHeap(heap) {
  let parent = Math.floor(heap.length/2)  -1  
  for(i=parent;i>=0;i--){
    maxHeapify(heap,i)
  }
}

buildMaxHeap(sample)
console.log(sample)
