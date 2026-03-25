/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    return nums.reduce((acc,val, i) =>{
        return i % 2 === 0 ? acc + val : acc - val;
    },0);
};