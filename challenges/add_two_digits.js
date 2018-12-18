// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// addTwoDigits(n) = 11.

const numberToArray = number => number.toString().split('')

const addTwoDigits = n => {
    const [ n1, n2 ] = numberToArray(n)
    return parseInt(n1) + parseInt(n2)
}

console.log(addTwoDigits(11))