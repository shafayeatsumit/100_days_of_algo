function permute(nums) {    
  let subsets = [],
  numsLength = nums.length,
  permutations = [];  
  subsets.push([])
  // iterating the numbers
  for(let i=0;i<nums.length;i++){
    let currentNumber = nums[i];
    let subsetsSize = subsets.length;
    // iterating the subsets
    for(let j=0;j<subsetsSize;j++){
      let set = subsets.shift() // last one from subset
      // adding the new number in every position k is index position
      // length+1 because it works for empty set. eg: let a = [] , copyA = a.slice(0), copyA.splice(index,0,currentNumber) // [5] 
      for(let k=0;k<set.length+1;k++){
        const setCopy = set.slice(0); // creating a copy of set
        setCopy.splice(k,0,currentNumber) // insert current number in the copy of that set
        if(setCopy.length === numsLength){
          permutations.push(setCopy)
        }else{
          subsets.push(setCopy)
        }
      }
    }
  }
  return permutations
}

const result = permute([1,3,5]);
console.log(result)

// [
//   [5, 3, 1],
//   [3, 5, 1],
//   [3, 1, 5],
//   [5, 1, 3],
//   [1, 5, 3],
//   [1, 3, 5]
// ]