function loadDashBoard(id,callback){

   let error;
   setTimeout(()=>{
      if(error)
      {
         return callback(error);
      }
      console.log("Fetching user data....");

      setTimeout(()=>{
         if(error)
      {
         return callback(error);
      }
         console.log("Fetching user friend list...");

         setTimeout(()=>{
            error ="post Fetching error ";
              if(error)
            {
                return callback(error);
            }
            console.log("Fetching uer posts...")

            setTimeout(()=>{
                 if(error)
                  {
                    return callback(error);
                  }
               console.log("fetching user comments....");
               
            },2000)
         },2000);
      },2000);
   },2000);
}

function errorHandle(error){
   console.log("Error has occured")
}

loadDashBoard("101",errorHandle)
