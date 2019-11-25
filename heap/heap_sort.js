function maxHeapify(A, i) {
  let left = (2 * i) + 1
  let right = (2 * i) + 2
  let largest = i
  if (left < A.length && A[left] > A[largest]) largest = left
  if (right < A.length && A[right] > A[largest]) largest = right
  if (largest !== i) {
    let temp = A[i]
    A[i] = A[largest]
    A[largest] = temp
    maxHeapify(A, largest)
  }
}

function buildMaxHeap(heap) {
  let parent = Math.floor(heap.length / 2) - 1
  for (i = parent; i >= 0; i--) {
    maxHeapify(heap, i)
  }
}

function heapSort(A){
  // Build our max heap.
  buildMaxHeap(A)
  // Find last element.
  lastElement = array.length - 1;  
  while (lastElement > 0) {
    [A[0], A[lastElement]] = [A[lastElement], A[0]]    
    maxHeapify(A, 0);
    lastElement -= 1
  }    
}

let array = [2,8,5,3,9,1]
heapSort(array)
console.log(array)