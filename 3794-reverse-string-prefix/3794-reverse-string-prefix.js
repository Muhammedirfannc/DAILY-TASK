/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let a = s.slice(0,k).split('').reverse().join('');
    let b =s.slice(k);
    return a+b;
};