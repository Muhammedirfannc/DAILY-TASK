function twosum(num,target){
    for(i=0;i<num.length;i++){
        for(j=0;j<num.length;j++){
            if(num[i]+num[j]===target){
                return[i,j]
            }
        }
    }
};
console.log(twosum([2,4,6,8,4,1,3,6],9));