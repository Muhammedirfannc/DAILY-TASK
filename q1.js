//q1
const products = [
    { name: "A",price: 200},
    { name: "B",price: 100},
    { name: "C",price: 150},
    { name: "D",price: 200},
];

products.sort((a,b)=> a.price-b.price)
let total = products.reduce((acc,val)=>acc+val.price,0);
console.log(products);
console.log(total);


//q2

// const items = [2,5,7,8,9,0,3];

// function finditem(){
//     for(let i=0;i<items.length;i++){

//     }

// }