const uniqueNumbersOnly = array => [...new Set(array)];

let amountOccurences = (number, array) => {
  return array.filter(n => n === number).length;  
};

const singleNumber = numbers => {
  let uniqueArray = uniqueNumbersOnly(numbers)
  let result = 0;

  for(let i = 0; i < uniqueArray.length; i++){
    if(amountOccurences(uniqueArray[i], numbers) === 1){
      result = uniqueArray[i];
    }
  }

  return result;
}

console.log(singleNumber([4,1,2,1,2]))