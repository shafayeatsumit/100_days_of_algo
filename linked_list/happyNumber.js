var isHappy = function (n) {
  if(!n) return false
  let cache = {}
  function numberToArray(num) {
    var digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = parseInt(num / 10);
    }    
    return digits
  } 

  function isHappyRecursive (number){
    let sum = 0;
    digits = numberToArray(number)
    for(let i of digits){
      sum += i*i
    }    
    if(sum===1){
      return true 
    }
    if(cache[sum]) return false 
    cache[sum] =1
    return isHappyRecursive(sum)
  }

  let result = isHappyRecursive(n)
  return result
};

isHappy(136747)