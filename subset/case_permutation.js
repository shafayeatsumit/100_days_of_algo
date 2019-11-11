/**
 * Leet Code:  Letter Case Permutation 784
 * Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  
 * Return a list of all possible strings we could create.
 * Examples:
 * Input: S = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * Input: S = "3z4"
 * Output: ["3z4", "3Z4"]
 * Input: S = "12345"
 * Output: ["12345"] 
 */


function stringSplice(str, index, char) {
  return str.slice(0, index) + char + str.slice(index + 1);
}


const find_letter_case_string_permutations = function (S) {
  permutations = [S];
  for(let i=0;i<S.length;i++){
    let char = S[i],
    ascii = char.charCodeAt(0);    
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      let size = permutations.length;
      for(let j=0; j<size; j++){
        if (char.toUpperCase() === char){
          let val = stringSplice(permutations[j],i,char.toLowerCase())
          permutations.push(val)
        }
        if(char.toLowerCase() === char){
          let val = stringSplice(permutations[j],i, char.toUpperCase())
          permutations.push(val)
        }
      }
    }
  }
  return permutations;
};


console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)