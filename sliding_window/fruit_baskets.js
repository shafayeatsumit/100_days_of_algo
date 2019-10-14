const fruits_into_baskets = function (tree) {
  let windowStart = 0,
  fruitsCount = 0,
  fruitsCache= {},
  k=2;
  for(windowEnd=0;windowEnd<tree.length;windowEnd++){
    let fruit = tree[windowEnd]
    if(!fruitsCache[fruit]) fruitsCache[fruit] = 0
    fruitsCache[fruit] +=1;
    
    while(Object.keys(fruitsCache).length>k){      
      let fruitLeft = tree[windowStart]
      fruitsCache[fruitLeft] -= 1      
      if (!fruitsCache[fruitLeft]) delete fruitsCache[fruitLeft]      
      windowStart += 1;
    }
    fruitsCount = Math.max(fruitsCount, (windowEnd - windowStart + 1))
  }
  
  return fruitsCount;
};

let sample = ['A', 'A','A','A']
let r = fruits_into_baskets(sample)
console.log(r)