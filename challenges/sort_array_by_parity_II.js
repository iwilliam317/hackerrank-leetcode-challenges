https://leetcode.com/problems/sort-array-by-parity-ii/description/

const numbers = [4,2,5,7];

const isEven = numbers => numbers%2 === 0;
const isOdd = numbers => numbers%2! == 0;

const sortArrayByParityII = numbers => {
  const evenArray = numbers.filter(isEven)
  const oddArray = numbers.filter(isOdd)

  let auxArray = [];
  for(let c = 0; c < numbers.length; c++){
    if(isEven(c)){
      auxArray.push(evenArray.pop())
    }
    else{
      auxArray.push(oddArray.pop())
    }
  }
  return auxArray;
}

console.log(sortArrayByParityII(numbers));