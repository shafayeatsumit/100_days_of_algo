/**
 * A word is considered elfish if it contains the
letters: e, l, and f in it, in any order. For example, we would say
that the following words are elfish: whiteleaf, tasteful, unfriendly,
and waffles, because they each contain those letters.
 */

 /**
  * 1. Write a predicate function called elfish? that, given a word,
  * tells us if that word is elfish or not.
  * 2. Write a more generalized predicate function called x-ish? that,
  * given two words, returns true i
  */

  function elfIsh(s){
    if (s.length <= 3){
      return (s.indexOf('e') !== -1 && s.indexOf('l') !== -1 && s.indexOf('f') !== -1 )
    } 
    let char = s.slice(0,1)
    let newS = s.slice(1,s.length);
    if(char==='e' || char==='l' || char==='f') newS = newS+char;
    return elfIsh(newS)
  }

  let result = elfIsh('sumit')
  console.log(result)