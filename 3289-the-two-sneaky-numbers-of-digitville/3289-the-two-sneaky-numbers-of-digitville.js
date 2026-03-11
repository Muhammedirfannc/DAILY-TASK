/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const a = new Set();
    const ans =[];

    for (let num of nums){
        if(a.has(num)){
            ans.push(num);
        }else{
            a.add(num);
        }
    }
    return ans;
};