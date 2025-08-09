//Task 1
//a
let a= Math.random()*100;
let b= Math.floor(a);
console.log(b)

//b
let nums = [23,45,67,12,89,3]

console.log(Math.max(...nums));
console.log(Math.min(...nums));

//c
function sqaure(a){
    console.log(Math.sqrt(a))
}
sqaure(16);

//Task 2

let num = [1,2,0,0];
let k = 34;
let d= k.toString().split("").map(Number);
num.splice(2,2,d);
let out =num.flat();
console.log(out);