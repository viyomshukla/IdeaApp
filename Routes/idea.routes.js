const idea=require("../Contollers/idea.controller");
const i=require("../Models/ideas.model");
module.exports=(app)=>{
    app.get("/ideaApp/api/v1/ideas",idea.getallidea);
    app.post("/ideaApp/api/v1/ideas",idea.postallidea);
    app.put("/ideaApp/api/v1/ideas/:id",(req,res)=>{
        const a=req.params.id;
        const b=req.body;
        if(i[a]){
        i[a]=b;
        res.send(b).status(201);
        }
        else{
            req.send("NOT fOUND").status(404);
        }
    app.delete("/ideaApp/api/v1/ideas/:id",idea.deleteallidea)
    });
}
