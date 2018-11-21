// CHALLENGE - https://leetcode.com/problems/next-greater-element-i/
const findIndexInArray2 = (n, arr) => {
  return arr.indexOf(n);
}

const compareNextElement = (n, arr) => {
  let index = findIndexInArray2(n, arr);
  let aux = n;

  for(let i = index; i < arr.length; i++){
    if(arr[i]>aux){
      aux = arr[i];
      break;
    }
  }
  return (aux > n ? aux : -1);
}

const nextGreaterElement = (nums1, nums2) => {
  let aux = [];
  for(let i = 0; i < nums1.length; i++){
    aux.push(compareNextElement(nums1[i], nums2));
  }
  return aux;
}

const nums1 = [1,3,5,2,4];
const nums2 =[6,5,4,3,2,1,7];

console.log(nextGreaterElement(nums1, nums2))