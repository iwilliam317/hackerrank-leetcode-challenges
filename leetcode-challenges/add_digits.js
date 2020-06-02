https://leetcode.com/problems/add-digits/
const convertInt = number => parseInt(number);
const toArray = number => number.toString().split('').map(convertInt);

const isOneDigit = number => number.toString().split('').length == 1;

const sum = (a, b) => a + b

const compose = (fa, fb) => number => {
  return fa(number).reduce(fb,0)
}

const sumDigits = compose(toArray, sum);

const addDigits = number => {
  let aux;
  while(isOneDigit(number)==false){
    aux = sumDigits(number)
    number = aux;
  }
  return number;
};