/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let result =0;

    for(let num of nums){
        result |= num;
    }
    return result * (1 << (nums.length -1));
};