/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s =String(x)
    let i=0,j=s.length-1;
    while(i<j){
        if(s[i++]!==s[j--])
        return false
    }
    return true
};