fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((result)=>{
    result.forEach((data)=>console.log(data.name,data.email))
})
.catch((err)=>console.log("fetch is failed",err));