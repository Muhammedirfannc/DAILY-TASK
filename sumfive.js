function sumFive(arr){
    return arr.filter(num => num > 5).reduce((sum,num)=>sum+num,0);
};

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));

