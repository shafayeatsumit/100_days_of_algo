
function find_missing_numbers(nums) {
  let missingNumbers=[];
  let i =0;
  let startIndex = 1;
  while(i<nums.length){
    let j = nums[i] - startIndex; //index should b         
    if(nums[i] !== nums[j]){
      [nums[i],nums[j]] = [nums[j],nums[i]]; //swap
    }else{
      i++;
    }
  }
  i = 0;
  while(i<nums.length){
    let expected = i + startIndex;
    if(expected !== nums[i]) missingNumbers.push(expected)
    i++;
  }  
  return missingNumbers;
}

console.log(find_missing_numbers([12,14]));
// console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
// console.log(find_missing_numbers([2, 4, 1, 2]));
// console.log(find_missing_numbers([2, 3, 2, 1]));