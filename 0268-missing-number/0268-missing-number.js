/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let esum = n * (n+1) / 2;
    let asum = 0;

    for(let num of nums){
        asum = asum + num;
    }
    return esum-asum;
};