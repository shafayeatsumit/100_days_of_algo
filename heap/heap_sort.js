function maxHeapify(A, i ,lastIndex) {
  let left = (2 * i) + 1
  let right = (2 * i) + 2
  let largest = i
  if (left < lastIndex && A[left] > A[largest]) largest = left
  if (right < lastIndex && A[right] > A[largest]) largest = right
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
    maxHeapify(heap, i,i)
  }
}

function heapSort(A){
  // Build our max heap.
  buildMaxHeap(A)
  // Find last element.
  let lastElement = array.length - 1;

  while (lastElement > 0) {
    [A[0], A[lastElement]] = [A[lastElement], A[0]]    
    console.log(A)
    maxHeapify(array, 0, lastElement);
    lastElement -= 1
  }    
}

let array = [5, 12, 64, 1, 37, 90, 91, 97]
heapSort(array)
console.log(array)

//[ 9, 8, 5, 3, 2, 1 ]