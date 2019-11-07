/**
 * 
 * @param {*} intervals 
 * @param {*} new_interval 
 */

const insert = function (intervals, new_interval) {
  merged = [];
  intervals.push(new_interval)
  intervals.sort((a,b)=>a[0]-b[0])  
  let start = intervals[0][0],
    end = intervals[0][1]
  for(let i =1 ; i<intervals.length; i++){
    let intervalStart = intervals[i][0],
    intervalEnd = intervals[i][1];
    if(intervalStart<=end){
      end = Math.max(end,intervalEnd);
    }else{
      merged.push([start,end])
      start = intervalStart;
      end = intervalEnd;
    }    
  } 
  merged.push([start, end])   
  return merged;
};

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 6]);
result = "";
for (i = 0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[1, 3], [5, 7], [8, 12]], [4, 10]);
result = "";
for (i = 0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);

intervals = insert([[2, 3], [5, 7]], [1, 4]);
result = "";
for (i = 0; i < intervals.length; i++)
  result += "[" + intervals[i][0] + ", " + intervals[i][1] + "] ";
console.log("Intervals after inserting the new interval: " + result);