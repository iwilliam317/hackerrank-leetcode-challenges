// https://leetcode.com/problems/remove-element/
const removeElement = (nums, val) => {
    let index;
    let n = nums.length
    for(let i = 0; i < n; i++){
      if(nums[i] == val){
        nums.splice(i,1)
        i--;
      }
    }
    return nums.length
};


console.log(removeElement([0,1,2,2,3,0,4,2],
2))
