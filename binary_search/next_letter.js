const search_next_letter = function (letters, key) {
  let start = 0,
  end = letters.length - 1;  
  if(letters[end]<=key || key< letters[0])  return letters[0];
  while(start<=end){
    let midIndex = Math.floor(start+(end-start)/2);
    if(key===letters[midIndex]) return letters[midIndex+1];
    if(key>letters[midIndex]){
      start  = midIndex + 1       
    }else{
      end = midIndex -1;
    }
  }
  return letters[start]
};


console.log(search_next_letter(['a', 'k','o'], 'c'))
// console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))
// console.log(search_next_letter( ['a', 'c', 'f', 'h'], 'h'))