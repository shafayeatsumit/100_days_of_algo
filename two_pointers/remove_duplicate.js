const remove_duplicates = function (arr) {
  // TODO: Write your code here
  let newArr = [arr[0]]
  for(i=0;i+1<arr.length;i++){
    if(arr[i]!==arr[i+1]){
      newArr.push(arr[i+1])
    }
  }
  console.log(newArr)
  return -1;
};

let arr = [2, 2, 2, 11];
remove_duplicates(arr)