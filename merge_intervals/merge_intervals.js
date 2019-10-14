const merge = function (intervals) {    
  if(intervals.length<2) return intervals;
  let result = [];
  intervals.sort((a,b)=>a[0]-b[0])  
  let start = intervals[0][0],
    end = intervals[0][1]
  for(let i=1;i<intervals.length;i++){    
    let interval = intervals[i];
    debugger
    if(interval[0]<=end){
      end = Math.max(end,interval[1])
    }else{  
      let newArray = [start, end]
      result.push(newArray)
      start = interval[0]
      end = interval[1]
    }
  }  
  result.push([start,end])
  return result
};

let intervals = [[1,4],[2,6],[3,5]]
let r = merge(intervals)
console.log(r)