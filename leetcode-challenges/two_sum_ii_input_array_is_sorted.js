//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

const twoSum = (numbers, target) => {
  for(let i = 0; i < numbers.length; i++){
    for(let j = i+1; j < numbers.length; j++){     
      if((numbers[i] +numbers[j]) == target){ 
        return [i+1, j+1];           
      }
      
    }
  }
}
console.log(twoSum([0, 0, 3, 4], 0))