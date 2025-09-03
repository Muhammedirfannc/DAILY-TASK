const numbers=[1,2,3,4,5];

function shuffle(arr){
    let a= arr.slice();
    for (i=a.length - 1;i>0;i--){
        let j=Math.floor(Math.random() * (i + 1));
        [a[i],a[j]]=[a[j],a[i]]
    }
    return a
};

console.log("original : ", numbers);
console.log("shuffled : ", shuffle(numbers));