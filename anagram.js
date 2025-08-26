function isAnagram(a,b){
    a=a.toLowerCase();
    b=b.toLowerCase();
    return a.split('').sort().join('')===b.split('').sort().join('');
}
console.log(isAnagram("Let","tel"));