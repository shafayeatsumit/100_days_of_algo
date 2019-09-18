const merge = function (intervals) {    
  let mergeIntervals = []
  intervals.sort((a,b)=>a[0]-b[0])  
  let start = intervals[0][0] ,
    end = intervals[0][1]
  for(i=1;i<intervals.length;i++){
    let interval = intervals[i]           
    if(interval[0]<=end){
      end = interval[1]
    }else{
      mergeIntervals.push([start,end])
      start = interval[0]
      end = interval[1]
    }
  }
  mergeIntervals.push([start,end])
  return mergeIntervals
};

let intervals = [[6, 7], [2, 4], [5, 9]]
let r = merge(intervals)
console.log(r)