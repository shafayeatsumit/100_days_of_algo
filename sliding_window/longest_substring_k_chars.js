const longest_substring_with_k_distinct = function (str, k) {
  let windowStart = 0,
  maxSubstring =0,
  chars ={},
  charsLength = 0;
  for(let windowEnd=0;windowEnd<str.length;windowEnd++){
    let currentChar = str[windowEnd]
    if (chars[currentChar]){
      chars[currentChar] = chars[currentChar] + 1
    }else{
      chars[currentChar] = 1
      charsLength +=1
    }
    
    while(charsLength>k){            
      let leftChar = str[windowStart]
      chars[leftChar] = chars[leftChar] - 1
      if (!chars[leftChar]){
        delete chars[leftChar]
        charsLength -= 1;
      } 
      windowStart = windowStart + 1;
    } 
    maxSubstring = Math.max(maxSubstring, (windowEnd - windowStart)+1)
  }    
  return maxSubstring;
};

let result=longest_substring_with_k_distinct('araaci',2)
console.log(result)