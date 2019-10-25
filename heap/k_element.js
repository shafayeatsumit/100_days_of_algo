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
  return heap
}

function find_k(heap,k){
  let result = [];
  for(let i =0;i<k;i++){
    let maxHeap = buildMaxHeap(heap);
    result.push(maxHeap.shift());
    maxHeap.splice(0, 0, maxHeap.pop())
  }
  console.log(result)
}
let sample = [5, 12, 11, -1, 12];


find_k(sample,k=3)