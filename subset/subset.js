const find_subsets = function (nums) {
  let subsets = [[]]
  for(let i of nums){
    let levelSize = subsets.length
    for (let j=0;j<levelSize;j++){
      let elem = subsets[j]      
      subsets.push([...elem,i])
    }
  }
  return subsets;
};


let r = find_subsets([1, 3])
console.log(r)
r= find_subsets([1, 5, 3])
console.log(r)