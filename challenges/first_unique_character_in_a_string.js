//https://leetcode.com/problems/first-unique-character-in-a-string/

const isUnique = (array, letter) => array.filter(s => s === letter).length === 1;

const noneUnique = (n, array) => n === array.length;

const firstUniqChar = string => {
  let aux = string.split('');
  let index = 0;
  let i;

  for(i = 0; i < aux.length; i++){    
    if(isUnique(aux, aux[i])){
      index = i;
      break;
    } 
  }

  if(noneUnique(i, aux)){
    index = -1;
  }

  return index;
}


console.log(firstUniqChar('leetcode'))