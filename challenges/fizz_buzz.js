//https://leetcode.com/problems/fizz-buzz/
const dividedByThree = n => n % 3 === 0;
const dividedByFive = n => n % 5 === 0;
const compose = (fa, fb) => n => fa(n) && fb(n);

const dividedByThreeAndFive = compose(dividedByThree, dividedByFive);

const fizzBuzz = n => {
  let aux = [];
  for(let i = 1; i <= n; i++){
    if(dividedByThreeAndFive(i))aux.push(`FizzBuzz`);
    else if(dividedByThree(i)) aux.push('Fizz');
    else if (dividedByFive(i)) aux.push('Buzz');
    else aux.push(i.toString())
    
  }
  return aux;
};

const n = 15;

console.log(fizzBuzz(n))