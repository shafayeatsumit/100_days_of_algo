/**
 *Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 *Given nums = [3,2,2,3], val = 3, 
 *Your function should return length = 2, with the first two elements of nums being 2.
 *It doesn't matter what you leave beyond the returned length.
 *Given nums = [0,1,2,2,3,0,4,2], val = 2
 * Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
 */

function remove_element(arr, key) {
  let p = 0; // index of the next element which is not 'key'
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==key){
      arr[p] = arr[i]
      p++;
    }
  }  
  return p;
}


let result = remove_element([0, 1, 2, 2, 3, 0, 4, 2],2)
console.log(result)