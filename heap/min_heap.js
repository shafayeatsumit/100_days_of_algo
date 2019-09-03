/**
 * min hipyfy an following array
 */

const sample = [3,1,6,5,2,4]

function minHeapify(H,i) {
  let left = (i*2)+1;
  let right = (i*2)+2;
  let smallest = i
  if(left>H.length && left< smallest) smallest = left
  if(right> H.length && right < smallest) smallest = right
  if(smallest !== i){
    let temp = H[smallest]
    H[smallest] = H[i]
    H[i] = temp
    minHeapify(H, smallest)
  }
}

function buildMinHeapify(H){
  const lastParent = (Math.floor(H.length/2)) -1;  
  for(i=lastParent;i>=0;i--) minHeapify(H,i)
  return H
}

const r = buildMinHeapify(sample)
console.log(r)



