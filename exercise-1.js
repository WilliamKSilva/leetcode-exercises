
// Given an integer array find the elements that added resoves to the target

var twoSum = function(nums, target) {    
  let array = [];

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];     

      if (sum === target) {
        array[0] = i;
        array[1] = j;
      }
    }
  }

  return array;
};

console.log(twoSum([2, 5, 5, 11], 10));