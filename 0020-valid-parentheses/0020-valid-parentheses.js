/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const a = [];
    const b = {
        ")":"(",
        "}":"{",
        "]":"["
    };

    for(let ch of s){
        if(b[ch]){
            const top = a.pop();
            if(top !== b[ch]) return false;
        }else{
            a.push(ch);
        }
    }
    return a.length === 0;
};