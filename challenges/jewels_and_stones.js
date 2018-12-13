//https://leetcode.com/problems/jewels-and-stones/
const numJewelsInStones = (jewels, stones) => {
  let counter = 0;

  for(let i = 0; i < stones.length; i++){
    if(jewels.includes(stones[i])){
      counter = counter + 1;
    }
  }
  return counter;

}

console.log(numJewelsInStones('aA', 'aAAbbbb'))

