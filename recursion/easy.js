function factorial (num){
  if(num===0) return 1;
  return factorial(num-1)*num;
}


function naturalNumbers(n){
  if(n===0) return 0;
  return naturalNumbers(n-1) + n;
}



function multiply(a,b){
  if(b===1) return a
  return multiply(a,b-1) + a;
}

function power(x, y) {
  if (y === 0) return 1;
  return power(x, y - 1) * 2
}

function reverseString(s) {
  if (s.length === 0) return ""
  let char = s.slice(0, 1)
  return reverseString(s.slice(1, s.length)) + char;
}