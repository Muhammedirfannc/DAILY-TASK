/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let a=1;
    for(let b=1;b<nums.length;b++){
        if(nums[b] !== nums[a-1]){
            nums[a]=nums[b];
            a++
        }
    }    
    return a;
};