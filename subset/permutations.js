function permute(nums) {
 let subsets = [];
 subsets.push([])
 for(let i of nums){
   let size = subsets.length;
   for(let j=0; j<size;j++){
     let set = subsets[j]
     for(let k=0; k<set.length+1;k++){
       const newPermutation = set.slice(0);
       newPermutation.splice(k, 0, i)
       if (newPermutation.length === set.length) {
         subsets.push(newPermutation);
       } else {
         subsets.push(newPermutation);
       }       
     }               
   }
 }
 console.log(subsets)
}

const result = permute([1, 3, 5]);
// console.log(result)