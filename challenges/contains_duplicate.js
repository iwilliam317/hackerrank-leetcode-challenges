const uniqueArray = array => [...new Set(array)]
const sameLength = (originalArray, uniqueArray) => originalArray.length !== uniqueArray.length;

const compose = (fa, fb) => nums => fb(nums, fa(nums));

const containsDuplicate = compose(uniqueArray, sameLength);

containsDuplicate([1,2,3,1]);