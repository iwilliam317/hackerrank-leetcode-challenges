https://leetcode.com/problems/sort-array-by-parity/description/
const isOdd = number => number%2 !== 0;
const isEven = number => number%2 === 0;

const sortArrayByParity = numbers=> {
    let aux = [];
    const oddNumbers = numbers.filter(isOdd);
    const evenNumbers = numbers.filter(isEven);
    aux.push(...evenNumbers)
    aux.push(...oddNumbers)

    return aux;
};

console.log(sortArrayByParity([3,1,2,4]));