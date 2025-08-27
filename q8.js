function doubleAfter2Second(number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(number * 2);
        },2000);
    });
};
doubleAfter2Second(5)
.then((result1)=>{
    console.log("first result: ",result1)
    return doubleAfter2Second(result1)
})
.then((result2)=>{
    console.log("second result: ",result2)
    return doubleAfter2Second(result2)
})
.then((result3)=>{
    console.log("final result: ",result3)
})
.catch((err)=>console.log(err));