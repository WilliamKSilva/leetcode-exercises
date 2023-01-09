/**
 * @param {number[]} nums
 * @return {number}
 */

// BigO(2n) ou apenas BigO(n), cortando as constantes
var missingNumber = function(nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    for (let j = 0; j < nums.length + 1; j++) {
        if (!set.has(j)) {
            return j;
        }
    }
};
        
