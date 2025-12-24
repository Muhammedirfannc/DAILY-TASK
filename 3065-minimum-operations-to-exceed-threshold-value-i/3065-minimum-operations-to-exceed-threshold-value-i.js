/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = 0;

    for(let a of nums){
        if(a < k){
            count++;
        }
    }
    return count;
};