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
  if(this.maxHeap.length === 0 || this.maxHeap.peek()>num){
    this.maxHeap.push(num)
  }else{
    this.minHeap.push(num)
  }
  if(this.maxHeap.length - this.minHeap.length > 1){
    this.minHeap.push(this.maxHeap.pop())
  }else if(this.maxHeap.length - this.minHeap.length < 0){
    this.maxHeap.push(this.minHeap.pop())
  }
}


MedianFinder.prototype.findMedian = function () {
  if(this.maxHeap.length > this.minHeap){
    return this.maxHeap.content.shift()
  }else{
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
obj.findMedian()

