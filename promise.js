let prm = new Promise((resolve)=>{
  console.log("Executer function.....");
  resolve("succes");
   
});

prm.then((result)=>{
    console.log(result);
});