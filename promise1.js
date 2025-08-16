function step1(){
    return new Promise((resolve,reject)=>{
        console.log("step1 is started");
        setTimeout(()=>{
            console.log("step1 is ended");
            resolve()
        },4000)
    });
}

function step2(){
    return new Promise((resolve,reject)=>{
        console.log("step2 is started");
        setTimeout(()=>{
            console.log("step2 is ended");
            resolve()
        },3000);
    });
}

function step3(){
    return new Promise((resolve,reject)=>{
        console.log("step3 started");
        setTimeout(() =>{
            console.log("step3 is ended");
            reject("failed")
        },2000);
    });
}

function step4(){
    return new Promise((resolve,reject)=>{
        console.log("step4 is started");
        setTimeout(()=>{
            console.log("step4 is ended");
            resolve()
        },1000);
    });
}

step1().then(step2).then(step3).then(step4)
.then(value => console.log(value))
.catch(error => console.log("promise is:",error))
.finally(()=>console.log("promise is completed (clear space)"));