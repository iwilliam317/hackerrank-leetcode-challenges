// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

const findDisappearedNumbers = nums => {
  let aux = []
  for(let i = 1; i <= nums.length; i++){
    if(!nums.includes(i)){
      aux.push(i)
    }
  }
  return aux
};

const nums = [4,3,2,7,8,2,3,1]

console.log(findDisappearedNumbers(nums))

