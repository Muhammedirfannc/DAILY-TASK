/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    return nums.find((n, i) => nums.indexOf(n) !== i);
};