/**
 * Leet Code: 844. Backspace String Compare
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. 
 * # means a backspace character.
 * Input: S = "ab#c", T = "ad#c" Output: true Explanation: Both S and T become "ac".
 * Input: S = "ab##", T = "c#d#" Output: true Explanation: Both S and T become "".
 * Input: S = "a##c", T = "#a#c" Output: true Explanation: Both S and T become "c".
 * Input: S = "a#c", T = "b" Output: false Explanation: S becomes "c" while T becomes "b".
 */
var removeBackspace = function (str) {
  let stack = [];
  for (let i=0; i<str.length; i++){
    if(str[i]!=='#'){
      stack.push(str[i])
    }else if(stack.length){
      stack.pop()
    }    
  }  
  let newStr = ""
  for(let i=0;i<stack.length;i++){
    newStr = newStr + stack[i]
  }
  return newStr
}

var backspaceCompare = function (S, T) {
  let sNoBackSpace = removeBackspace(S),
    tNoBackSpace = removeBackspace(T);
  return sNoBackSpace===tNoBackSpace;
};


let S = "x#yz##";
removeBackspace(S)