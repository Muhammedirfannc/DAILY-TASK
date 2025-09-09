function reduseTra(nums,fn,init){
    let result = init;
    for(i=0;i<nums.length;i++){
        result=fn(result,nums[i]);
    }
    return result;
};

console.log(reduseTra([1,2,3,4],function sum(accum, curr) { return accum + curr; },0));
console.log(reduseTra([1,2,3,4],function sum(accum, curr) { return accum + curr * curr; },100));
console.log(reduseTra([],function sum(accum, curr) { return 0; },25));