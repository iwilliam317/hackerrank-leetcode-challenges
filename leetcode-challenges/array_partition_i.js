https://leetcode.com/problems/array-partition-i/

const arrayPairSum = (nums) => {  
  nums.sort();
      let result = 0;
    for(let i = 0; i < nums.length; i = i + 2){
        result += nums[i];
    }
    return result;
};