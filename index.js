const express=require("express");
const app=express();

app.use(express.json());

require("./Routes/idea.routes")(app);        //pass in form of function
app.listen(8000,()=>{
    console.log("Server Get Started")
});
