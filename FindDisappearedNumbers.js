 /**
 * @param {number[]} nums
 * @return {number[]}
 */

// I think that it is BigO(n)
var findDisappearedNumbers = function(nums) {
    const set = new Set();
    let array = [];

    for (let i = 1; i <= nums.length; i++) {
        set.add(i);
    }

    for (let j = 0; j <= nums.length; j++) {
        if (set.has(nums[j])) {
            set.delete(nums[j])
        }
    }

    for (let value of set) {
        array.push(value)
    }

    return array;
};
