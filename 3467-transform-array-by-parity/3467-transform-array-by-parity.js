/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    const evencount = nums.filter(num => num %2 === 0).length;
    return [...Array(evencount).fill(0), ...Array(nums.length - evencount).fill(1)];    
};