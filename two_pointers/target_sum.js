const pair_with_targetsum = function (arr, target_sum) {
  const len = arr.length;
  let p1 = 0;
  let p2 = len-1;
  while(p1<p2){
    let sum = arr[p1] + arr[p2]    
    if(sum === target_sum) {
      return [p1, p2]
    }
    if(sum>target_sum){
      p2 = p2 - 1;
    }else if(sum<target_sum){
      p1 = p1 + 1;
    }       
  }
}

const r = pair_with_targetsum([1, 2, 3, 4, 6], 6)
console.log(r)