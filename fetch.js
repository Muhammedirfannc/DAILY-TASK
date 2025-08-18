fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then(txt => console.log(txt.slice(-5)))
.catch(error => console.log("api is failed",error));