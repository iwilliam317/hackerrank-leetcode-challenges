//https://leetcode.com/problems/intersection-of-two-arrays/
const nums1 = [1,2,2,1], nums2 = [2, 2]

const uniqueNumbers = array => [...new Set(array)]
const intersection = (nums1, nums2) => {
  let aux = [];
  for(let i = 0; i < nums1.length; i++){
    if(nums2.includes(nums1[i])){
      aux.push(nums1[i])
    }
  }
  return uniqueNumbers(aux);
};

console.log(intersection(nums1, nums2))