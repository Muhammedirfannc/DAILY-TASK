
var singleNumber = function(nums) {
    let result = 0;
    for(let num of nums){
        result ^=num;
    }
    return console.log(result);
};
singleNumber([2,2,1]);