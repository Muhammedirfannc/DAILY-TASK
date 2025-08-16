function num1(){
    return new Promise((resolve,reject)=>{
        console.log("1 is started");
        setTimeout(()=>{
            console.log("1 is ended");
            resolve();
        },4000);
    });
}

function num2(){
    return new Promise((resolve,reject)=>{
        console.log("2 is started");
        setTimeout(()=>{
            console.log("2 is ended");
            resolve();
        },3000);
    });
}

function num3(){
    return new Promise((resolve,reject)=>{
        console.log("3 is started");
        setTimeout(()=>{
            console.log("3 is ended");
            reject("failed");
        },2000);
    });
}

function num4(){
    return new Promise((resolve,reject)=>{
        console.log("4 is started");
        setTimeout(()=>{
            console.log("4 is ended");
        },1000);
    });
}

async function run(){
    try{
        await num1();
        await num2();
        await num3();
        await num4();
        console.log("promise is completed");
    }catch(error){
        console.log("promise is:",error)
    }
}

run();