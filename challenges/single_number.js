const uniqueNumbersOnly = array => [...new Set(array)];

let amountOccurences = (number, array) => {
  return array.filter(n => n === number).length;  
};

const singleNumber = numbers => {
  const ONE_OCCURENCE = 1;
  let uniqueArray = uniqueNumbersOnly(numbers)
  let result = 0;

  for(let i = 0; i < uniqueArray.length; i++){
    if(amountOccurences(uniqueArray[i], numbers) === ONE_OCCURENCE){
      result = uniqueArray[i];
    }
  }

  return result;
}

console.log(singleNumber([4,1,2,1,2]))