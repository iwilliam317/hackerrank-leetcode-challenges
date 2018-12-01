// https://leetcode.com/problems/find-the-difference/
const findTheDifference = (s, t) => {
  let aux = [...t];
  for(let i = 0; i < s.length; i++){
    if(t.includes(s[i])){
      aux.splice(aux.indexOf(s[i]), 1);
    }
  }
  return aux.join('')
}

console.log(findTheDifference('abcd','abcde'))