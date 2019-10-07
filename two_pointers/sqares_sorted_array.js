/**
 * @param {number[]} A
 * @return {number[]}
 */

 /**
  * example Input: [-4,-1,0,3,10]
  * Output: [0,1,9,16,100]
  */

var sortedSquares = function (A) {
  const n = A.length;
  let squares = [];
  let left = 0,
  right = n - 1;
  while(left<=right){
    let leftSquare = A[left] * A[left],
    rightSquare = A[right] * A[right];
    if(leftSquare>rightSquare){
      squares.unshift(leftSquare)
      left +=1
    }else{
      squares.unshift(rightSquare)
      right -=1
    }
  }
  return squares
};

sortedSquares([-4, -1, 0, 3, 10])