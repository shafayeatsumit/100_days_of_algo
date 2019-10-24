/**
 * LeetCode:295
 * Find median from data stream.
 * three step process:
 * 1. Insert from data stream
 * 2. Balance data into both heap
 * 3. Find the median
 */



var Heap = require("collections/heap");


var MedianFinder = function () {
  this.maxHeap = new Heap([], null, (a,b) => (a-b)) // first half of the numbers (small numbers)
  this.minHeap = new Heap([], null, (a,b) => (b-a)) // second half of the numbers (small numbers)
};


MedianFinder.prototype.addNum = function (num) {
  // if nothing in maxHeap insert in maxHeap
  // if the given num is smaller than the top element of maxHeap then we should push the num to max heap
  // else insert it to minHeap
  if(this.maxHeap.length === 0 || this.maxHeap.peek()>num){
    this.maxHeap.push(num)
  }else{
    this.minHeap.push(num)
  }
  if (this.maxHeap.length + 1  > this.minHeap.length){
    // maxHeap +1 is greater than minHeap 
    // so push the last element of maxheap To minHeap
    this.minHeap.push(this.maxHeap.pop())
  } else if (this.maxHeap.length < this.minHeap.length){
    // minHeap is greater than maxHeap
    // so push the last element of min heap to max heap
    this.maxHeap.push(this.minHeap.pop())
  }else{
    // min and max is equal,its balanced already
    // nothing to do
  }
}


MedianFinder.prototype.findMedian = function () {
  if(this.maxHeap.length > this.minHeap){
    return this.maxHeap.content.shift()
  }else{
    // shift() will take out the first element from max and min heap
    let mean = (this.maxHeap.content.shift() + this.minHeap.content.shift())/2
    return mean
  }
};


var obj = new MedianFinder()
obj.addNum(3)
obj.addNum(1)
obj.addNum(8)
obj.addNum(5)
obj.addNum(11)
obj.addNum(2)
obj.addNum(7)
let result = obj.findMedian()
console.log(result)

