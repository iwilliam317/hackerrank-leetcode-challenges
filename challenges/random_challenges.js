/*
Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be
containsDuplicates(a) = true.

There are two 1s in the given array.

For a = [3, 1], the output should be
containsDuplicates(a) = false.

The given array contains no duplicates
*/
const uniqueArray = array => [...new Set(array)]
const containsDuplicates = a => {
    if(a.length != uniqueArray(a).length) return true
    return false
}

/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

Example

For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.
*/
const sumOfTwo = (a, b, v) => {
  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
      if(a[i] + b[j] == v){
        return true
      }
    }
  }
  return false

}
