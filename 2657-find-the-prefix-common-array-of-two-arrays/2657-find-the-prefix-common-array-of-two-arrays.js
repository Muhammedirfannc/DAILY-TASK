/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let res = [];
    for(let i=0;i<A.length;i++){
        let common = 0;
        for(let j=0;j<= i;j++){
            for (let k=0;k<=i;k++){
                if(A[j] === B[k]){
                    common++;
                    break;
                }
            }
        }
        res.push(common);
    }
    return res;
};