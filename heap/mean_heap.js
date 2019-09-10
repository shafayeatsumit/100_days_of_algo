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

};

