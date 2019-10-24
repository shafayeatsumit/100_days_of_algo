function permute(nums) {    
  let subsets = [],
  numsLength = nums.length, // later we can compare it to the subset length
  permutations = [];  // this is for result
  subsets.push([])
  // iterating the numbers
  for(let i=0;i<nums.length;i++){
    let currentNumber = nums[i];
    let subsetsSize = subsets.length;    
    // iterate over all the subset from SUBSETS and add the currentNumber
    for(let j=0;j<subsetsSize;j++){
      let set = subsets.shift() // first one from subset
      // adding the new number in every position k is index position
      // length+1 because it works for empty set. eg: let a = [] , copyA = a.slice(0), copyA.splice(index,0,currentNumber) // [5] 
      for(let k=0;k<set.length+1;k++){
        const setCopy = set.slice(0); // creating a copy of set
        setCopy.splice(k,0,currentNumber) // insert current number in the copy of that set
        // if the length is the same as number set length then no need to add it to the subset, 
        // directly add to the permutations
        // else add it to SUBSETS so later we can add number to the subset
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