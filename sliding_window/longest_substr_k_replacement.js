const length_of_longest_substring = function (s, k) {
  let windowStart = 0,
  maxLength = 0;
  let charFreq = {};
  let numberOfChars = 0;
  for(let windowEnd=0; windowEnd<s.length; windowEnd++){
    let char = s[windowEnd];    
    if(!charFreq[char]) charFreq[char] = 0;
    charFreq[char] += 1;
    numberOfChars += 1;        
    debugger
    while(Object.keys(charFreq).length>k+1){
      let firstChar = s[windowStart]
      charFreq[firstChar] -=1;
      if(!charFreq[firstChar]) delete charFreq[firstChar]
      windowStart +=1;
      numberOfChars -=1;      
    }    
    maxLength = Math.max(maxLength, numberOfChars)
  }    
  return maxLength;
};

let result = length_of_longest_substring('aabccbb',2)
console.log(result)

