var removeBackspace = function (str) {
  let i = str.length-1;
  while(i>=0){        
    if(str[i]==='#'){
      for(let j=i-1; j>=0 ; j-- ){
        if(str[j]!=='#'){
          let left = str.slice(0, j)
          let right =str.slice(i,j)
              
          debugger   
        }
      }
    }
    i--;  
  }
  console.log(str)
}

var backspaceCompare = function (S, T) {

};


let S = "xyz##";
removeBackspace(S)