function longestWord(str){
    const words=str.split(' ');
    let longest=words[0];

    for(let i=1;i<words.length;i++){
        if(words[i].length>longest.length){
            longest=words[i];
        }
    }
    return longest
};
console.log(longestWord("Hello darkness my old friend"));
console.log(longestWord("Kayla's toy is plastic"));
console.log(longestWord("Hello there mate"));