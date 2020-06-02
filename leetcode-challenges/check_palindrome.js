// Given the string, check if it is a palindrome.
const reverseString = string => string.split('').reverse().join('')
const checkPalindrome = inputString => {
  return reverseString(inputString) === inputString
}

console.log(checkPalindrome('aba'))