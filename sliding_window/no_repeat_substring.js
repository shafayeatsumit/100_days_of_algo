const non_repeat_substring = function (s) {
  let charFrequency = {};
  let windowStart = 0;
  let longSubStr = 0;
  let numberOfChars = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
    let char = s[windowEnd];
    if(!charFrequency[char]) charFrequency[char] = 0    
    charFrequency[char] += 1;    
    numberOfChars += 1;    
    if(Object.keys(charFrequency).length !== numberOfChars){
      charFrequency[s[windowStart]] -= 1;    
      numberOfChars -=1;      
      if (!charFrequency[s[windowStart]]) delete charFrequency[s[windowStart]]
      windowStart +=1;
    }
    let newSubStr = windowEnd - windowStart + 1;    
    if(newSubStr > longSubStr) {
      longSubStr = newSubStr
    }    
  }  
  return longSubStr;
};

let string = "ABDEFGABEF";
let result = non_repeat_substring(string)
console.log(result)