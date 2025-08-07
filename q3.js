//q1
const items =[1,2,3,4,5,6,7,8,9,10];

for(let a of items){
    if(a%3!==0){
        console.log(a)
 }
}

//q2

let arr = [2,3,4,7,9,2,7,3,8];

let arr2= arr.filter((a,b,c) => c.indexOf(a)===c.lastIndexOf(a));
console.log(arr2);