//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

const repeatedNTimes = array => {
  let occur = array.length / 2
  for(let i = 0; i < array.length; i++){
    if(array.filter(a => a == array[i]).length == occur){
      return (array[i])
    }
  }  
};

let array = [5,1,5,2,5,3,5,4]
console.log(repeatedNTimes(array))