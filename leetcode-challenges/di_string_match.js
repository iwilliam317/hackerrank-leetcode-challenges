//https://leetcode.com/problems/di-string-match/
const diStringMatch = entry => {
  let aux = [];
  let ci = 0;
  let cd = entry.length;
  
  for(let i = 0; i <= entry.length; i++){
    if(entry[i] == 'I'){
      if(aux.includes(ci)){
        ci++;
      }
      else{
        ci = 0
      }    
      aux.push(ci)
    }
    else{
      if(aux.includes(entry.length)){
        cd--;
      }
      else{
        cd = entry.length
      }    
      aux.push(cd)
    }
  }
  return aux;
};
console.log(diStringMatch('DII'))