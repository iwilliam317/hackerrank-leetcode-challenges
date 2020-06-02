//https://leetcode.com/problems/reverse-integer/

const reverse = x => {
  let aux = x.toString().split('')
  const negative = isNegative(aux[0]);

   aux.reverse()

  if(isFirstDigitZero(aux[0])){
   aux.shift()      
  }

  if(negative){
    aux.splice(-1,1)
    aux.unshift('-')
  }    

  return aux.join('')
};
const isNegative = s => s === '-'
const isFirstDigitZero = s => s === '0'


console.log(reverse(320))