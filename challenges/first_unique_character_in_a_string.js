//https://leetcode.com/problems/first-unique-character-in-a-string/

const isUnique = (array, letter) => array.filter(s => s === letter).length === 1;

const firstUniqChar = string => {
  let aux = string.split('');
  for(let i = 0; i < aux.length; i++){    
    if(isUnique(aux, aux[i])){
      return i;
    } 
  }
  return -1
}

console.log(firstUniqChar('loveleetcode'))